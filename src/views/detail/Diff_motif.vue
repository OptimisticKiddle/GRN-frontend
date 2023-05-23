<template>
  <!-- 主体 -->
  <div style=" overflow: hidden;">
    <!-- 展示面板 -->
    
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <!-- 展示面板title -->
          <template #title>
            <i class="ti-layers"></i>&nbsp; Diff Peaks Motif Enrich <sup><span data-html="true" data-toggle="tooltip"
                data-placement="right" title="The meaning of columns is explained in the Help page."><i
                  class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
          </template>


          <!-- 表格展示 -->
          <el-table :data="tableData" border stripe table-layout="auto" header-cell-class-name="header-cell-class-name"
             style="color: black;margin-top: 20px;" @sort-change="sortChange">
            <!-- Rank、Motif、Name、Consensus、p.value、log.p.val、q.value、Target Sequences、Target Seq Percent、Bg Sequences、Bg Seq Percent-->
            <el-table-column prop="rank" label="Rank" align="center" width="70px" />
            <el-table-column prop="motif" label="Motif" align="center" width="350px">
              <template v-slot="scope">
                <div v-html="scope.row.motif"></div>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="Name" align="center" :width="flexColumnWidth('name',tableData)" />
            <el-table-column prop="consensus" label="Consensus" align="center" width="140px" />
            <el-table-column prop="p_value" label="p.value" :sortable="'custom'" align="center" width="90px" />
            <el-table-column prop="log_p_value" label="log.p.value" align="center" width="90px" />
            <el-table-column prop="q_value" label="q.value" :sortable="'custom'" align="center" width="110px" />
            <el-table-column prop="target_sequences" label="Target Sequences" :sortable="'custom'" align="center"
              width="120px" />
            <el-table-column prop="target_sequences_percent" label="Target Seq Percent" align="center"
              width="150px" >
              <template v-slot="scope">
                {{ formatPercent(scope.row.target_sequences_percent) }}
              </template>
            </el-table-column>
            <el-table-column prop="bg_sequences" label="Bg Sequences" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="bg_sequences_percent" label="Bg Seq Percent" align="center" width="150px">
              <template v-slot="scope">
                {{ formatPercent(scope.row.bg_sequences_percent) }}
              </template>
            </el-table-column>

          </el-table>
          <div class="table-foot" style="margin: 3vh auto;">
            <!-- 下载 -->
            <el-button type="primary" plain @click="onDownload"><el-icon>
                <Download />
              </el-icon>CSV</el-button>
            <!-- 分页 -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currentPage" :page-sizes="[5, 10, 20]" :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
          </div>

        </el-collapse-item>
      </el-collapse>
   
  </div>
</template>

<script>
import request from "@/utils/request";



export default {
  name: "Diff_motif",
  components: {

  },


  methods: {

    load() {
      request.post("/get_diff_motif_data",
        {
          id: this.dbID,
          seq: this.seq,
          paging: this.paging

        }).then(res => {
          this.tableData = res.data;
          this.total = res.records_sum;
        })
    },
    onDownload() {
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diff_motif.csv`;
      document.body.appendChild(link);
      link.click();
    },

    handleSizeChange(val) {   //改变当前每页的个数触发
      this.pageSize = val
      this.paging.length = val
      this.load();
    },
    handleCurrentChange(val) {   //改变当前页码触发

      this.currentPage = val
      this.paging.start = (val - 1) * this.paging.length
      this.load();

    },
    sortChange(column) {  // 表格排序条件发生变化触发
      // 当前列的排序  ascending 升序 descending 降序 
      if (column.order == "ascending") {
        this.tabSort = 1
      } else if (column.order == "descending") {
        this.tabSort = -1
      } else {
        this.tabSort = 0
      }
      // 当前点击列名
      this.seq = {}
      if (this.tabSort !== 0) {
        this.tabProp = column.prop + '_seq'
        this.seq[this.tabProp] = this.tabSort
      }
      console.log(this.seq)

      // 调后端接口，把后端需要的参数传递给后端，就可以实现排序
      this.load()
    },
    formatPercent(val) {
      var data = (val * 100).toFixed(2) + "%"
      return data

    },
    // 自适应表格列宽
    flexColumnWidth(str, tableData, flag = 'max') {
      // str为该列的字段名(传字符串);tableData为该表格的数据源(传变量);
      // flag为可选值，可不传该参数,传参时可选'max'或'equal',默认为'max'
      // flag为'max'则设置列宽适配该列中最长的内容,flag为'equal'则设置列宽适配该列中第一行内容的长度。
      str = str + ''
      let columnContent = ''
      if (!tableData || !tableData.length || tableData.length === 0 || tableData === undefined) {
        return
      }
      if (!str || !str.length || str.length === 0 || str === undefined) {
        return
      }
      if (flag === 'equal') {
        // 获取该列中第一个不为空的数据(内容)
        for (let i = 0; i < tableData.length; i++) {
          if (tableData[i][str].length > 0) {
            // console.log('该列数据[0]:', tableData[0][str])
            columnContent = tableData[i][str]
            break
          }
        }
      } else {
        // 获取该列中最长的数据(内容)
        let index = 0
        for (let i = 0; i < tableData.length; i++) {
          if (tableData[i][str] === null) {
            return
          }
          const now_temp = tableData[i][str] + ''
          const max_temp = tableData[index][str] + ''
          if (now_temp.length > max_temp.length) {
            index = i
          }
        }
        columnContent = tableData[index][str]
      }
      // console.log('该列数据[i]:', columnContent)
      // 以下分配的单位长度可根据实际需求进行调整
      let flexWidth = 0
      for (const char of columnContent) {
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
          // 如果是英文字符，为字符分配8个单位宽度
          flexWidth += 8
        } else if (char >= '\u4e00' && char <= '\u9fa5') {
          // 如果是中文字符，为字符分配15个单位宽度
          flexWidth += 15
        } else {
          // 其他种类字符，为字符分配8个单位宽度
          flexWidth += 8
        }
      }
      if (flexWidth < 100) {
        // 设置最小宽度
        flexWidth = 100
      }
      
      if (flexWidth > 500) {
        // 设置最大宽度
        flexWidth = 500
      }
      return flexWidth + 'px'
    }
  },
  
  props: {
    dbID: Number,
    globalDataset: Object
  },
  data() {
    return {
      pb_gene: '',
      celline: '',

      currentPage: 1,
      total: 0,
      pageSize: 10,

      activeNames: ['1'],



      tableData: [],
      filter: {},
      /*          "chr": "chr2", //染色体号
                  "gene_chr": 1, //gene 染色体号
                  "gene_id": "ENSG00000127616.21", //gene id
                  "transcript_id": "ENST00000587988.5" //转录id
               }, //筛选项object */
      seq: {},
      paging: {
        "start": 0, //起始数据点（分页）
        "length": 10
      }


    };
  },
  computed: {
  },
  created() {
    this.load();
  },

}

</script>
  
<style scoped>
.el-form {
  margin-left: 4vw;
}

.el-form-item__label {
  color: black;
}

.header-cell-class-name {
  border-color: black;
  color: black;
}

.formRow1 {
  display: flex;
  /* grid-template-columns: repeat(4, 1fr); */
  /* justify-content: space-between; */

  margin-top: 20px;
  margin-right: 20px;
}


.formRow3 {
  display: flex;
  justify-content: center;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-collapse-item__wrap,
.col-md-6 {
  padding: 2vw;
}

.showimg {
  width: 40vw;

}

img {
  width: 100%;

  object-fit: cover;
}

.TSS_distribution {
  display: flex;
  justify-content: space-between;
}
</style>
