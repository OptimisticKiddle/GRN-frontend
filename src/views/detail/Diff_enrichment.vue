<template>
  <!-- 主体 -->
  <div style=" overflow: hidden;">
    <!-- tab -->
    <el-tabs type="border-card" class="demo-tabs ">

      <!--  GO_enrich  tab  -->
      <el-tab-pane label="GO Enrich" class="">
        <div class="col-md-8" data-plugin-portlet>
          <el-collapse v-model="activeNames">
            <el-collapse-item name="1">
              <!-- 展示面板title -->
              <template #title>
                <i class="ti-layers"></i>&nbsp; Diff Peaks GO Enrich <sup><span data-html="true" data-toggle="tooltip"
                    data-placement="right" title="The meaning of columns is explained in the Help page."><i
                      class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
              </template>


              <!-- 表格展示 -->
              <el-table :data="tableData1" border stripe table-layout="auto" :cell-style="{ padding: '0px' }"
                @sort-change="sortChange1" header-cell-class-name="header-cell-class-name"
                style="color: black;margin-top: 20px;font-size: 10px;">
                <!-- Gene Ratio、Bg Ratio、p.value、p.adjust、q.value、Gene IDs、Count-->
                <el-table-column prop="GO_id" label="GO ID" align="center" width="100px" />
                <el-table-column prop="description" label="Description" align="center"
                  :width="flexColumnWidth('description', tableData1)" />
                <el-table-column prop="gene_ratio" label="Gene Ratio" align="center" width="120px" />
                <el-table-column prop="bg_ratio" label="Bg Ratio" align="center" width="120px" />
                <el-table-column prop="p_value" label="p.value" :sortable="'custom'" align="center" width="200px" />
                <el-table-column prop="p_adjust" label="p.adjust" :sortable="'custom'" align="center" width="200px" />
                <el-table-column prop="q_value" label="q.value" :sortable="'custom'" align="center" width="200px" />
                <el-table-column prop="gene_ids" label="Gene IDs" align="center" :width="flexColumnWidth('gene_ids', tableData1)">
                  <template #header>
                    <span>gene_ids</span>
                    <el-tooltip class="item" effect="dark" content="The gene ID type is Entrez ID" placement="top">
                      <el-icon><QuestionFilled /></el-icon>
                    </el-tooltip>
                  </template>
                </el-table-column>
                <el-table-column prop="count" label="Count" :sortable="'custom'" align="center" width="100px" />

              </el-table>
              <div style="margin: 3vh auto;">
                <!-- 下载 -->
                <el-button type="primary" plain @click="onDownload1"><el-icon>
                    <Download />
                  </el-icon>CSV</el-button>
                <!-- 分页 -->
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page="currentPage" :page-sizes="[5, 10, 20]" :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper" :total="total1">
                </el-pagination>
              </div>

            </el-collapse-item>
          </el-collapse>
        </div>

        <!-- <div class="col-md-4">
            <img src="@/assets\plots\⑤_GO_enrich.png" alt="">
          </div> -->
        <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
          <header class="panel-heading" style="position: relative;">
            <span style="font-size: 16px;" class="panel-title">Enrich Plot</span>
            <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="GO enrichment analysis of gene sets annotated by differential peaks"><i
                    class="ti-info-alt" style="font-size: 70%"> </i>
                </span></sup>
            <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/GO_enrichment.png`"
              :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_GO_enrichment.png`" target="_blank"
              style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                  <Download />
                </el-icon></el-button></a>
          </header>
          <div class="panel-body">

            <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/GO_enrichment.png`" alt="">
          </div>
        </section>

      </el-tab-pane>
      <!--  KEGG_enrich  tab  -->
      <el-tab-pane label="KEGG Enrich" class="">
        <div class="col-md-8" data-plugin-portlet>
          <el-collapse v-model="activeNames">
            <el-collapse-item name="1">
              <!-- 展示面板title -->
              <template #title>
                <i class="ti-layers"></i>&nbsp; Diff Peaks KEGG Enrich <sup><span data-html="true" data-toggle="tooltip"
                    data-placement="right" title="The meaning of columns is explained in the Help page."><i
                      class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
              </template>


              <!-- 表格展示 -->
              <el-table :data="tableData2" border stripe table-layout="auto" :cell-style="{ padding: '0px' }"
                @sort-change="sortChange2" header-cell-class-name="header-cell-class-name"
                style="color: black;margin-top: 20px;font-size: 10px;">
                <!-- KEGG ID、Description、Gene Ratio、Bg Ratio、p.value、p.adjust、q.value、Gene IDs、Count-->

                <el-table-column prop="KEGG_id" label="KEGG ID" align="center" width="120px" />
                <el-table-column prop="description" label="Description" align="center"
                  :width="flexColumnWidth('description', tableData2)" />
                <el-table-column prop="gene_ratio" label="Gene Ratio" align="center" width="120px" />
                <el-table-column prop="bg_ratio" label="Bg Ratio" align="center" width="120px" />
                <el-table-column prop="p_value" label="p.value" :sortable="'custom'" align="center" width="200px" />
                <el-table-column prop="p_adjust" label="p.adjust" :sortable="'custom'" align="center" width="200px" />
                <el-table-column prop="q_value" label="q.value" :sortable="'custom'" align="center" width="200px" />
                <el-table-column prop="gene_ids" label="Gene IDs" align="center" :width="flexColumnWidth('gene_ids', tableData2)">
                  <template #header>
                    <span>gene_ids</span>
                    <el-tooltip class="item" effect="dark" content="The gene ID type is Entrez ID" placement="top">
                      <el-icon><QuestionFilled /></el-icon>
                    </el-tooltip>
                  </template>
                </el-table-column>
                <el-table-column prop="count" label="Count" :sortable="'custom'" align="center" width="100px" />

              </el-table>
              <div style="margin: 3vh auto;">
                
                <!-- 下载 -->
                <el-button type="primary" plain @click="onDownload2"><el-icon>
                    <Download />
                  </el-icon>CSV</el-button>
                <!-- 分页 -->
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page="currentPage" :page-sizes="[5, 10, 20]" :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper" :total="total2">
                </el-pagination>
              </div>

            </el-collapse-item>
          </el-collapse>
        </div>

        <!-- <div class="col-md-4">
            <img src="@/assets\plots\⑤_KEGG_enrich.png" alt="">
          </div> -->
        <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
          <header class="panel-heading" style="position: relative;">
            <span style="font-size: 16px;" class="panel-title">Enrich Plot</span>
            <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="KEGG enrichment analysis of gene sets annotated by differential peaks"><i
                    class="ti-info-alt" style="font-size: 70%"> </i>
                </span></sup>
            <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/KEGG_enrichment.png`"
              :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_KEGG_enrichment.png`" target="_blank"
              style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                  <Download />
                </el-icon></el-button></a>
          </header>
          <div class="panel-body">

            <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/KEGG_enrichment.png`" alt="">
          </div>
        </section>

      </el-tab-pane>


    </el-tabs>



  </div>
</template>



<script>
import request from "@/utils/request";



export default {
  name: "Diff_enrichment",
  components: {

  },


  methods: {

    load() {
      /*  if(sessionStorage.getItem('dbID')){
 
 this.dbID = JSON.parse(sessionStorage.getItem('dbID'));
 
 } */


      request.post("get_diff_GO_enrichment_data",
        {
          id: this.dbID,
          seq: this.seq1,
          paging: this.paging

        }).then(res => {
          this.tableData1 = res.data;
          this.total1 = res.records_sum;
        });
      request.post("/get_diff_KEGG_enrichment_data",
        {
          id: this.dbID,
          seq: this.seq2,
          paging: this.paging

        }).then(res => {
          this.tableData2 = res.data;
          this.total2 = res.records_sum;
        });

    },
    
    onDownload1() {

      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diff_peaks_GO_enrich.csv`;
      document.body.appendChild(link);
      link.click();
    },
    onDownload2() {
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diff_peaks_KEGG_enrich.csv`;
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
    sortChange1(column) {  // 表格排序条件发生变化触发
      // 当前列的排序  ascending 升序 descending 降序 
      if (column.order == "ascending") {
        this.tabSort = 1
      } else if (column.order == "descending") {
        this.tabSort = -1
      } else {
        this.tabSort = 0
      }
      // 当前点击列名
      this.seq1 = {}
      if (this.tabSort !== 0) {
        this.tabProp = column.prop + '_seq'
        this.seq1[this.tabProp] = this.tabSort
      }
      // 调后端接口，把后端需要的参数传递给后端，就可以实现排序
      this.load()
    },
    sortChange2(column) {  // 表格排序条件发生变化触发
      // 当前列的排序  ascending 升序 descending 降序 
      if (column.order == "ascending") {
        this.tabSort = 1
      } else if (column.order == "descending") {
        this.tabSort = -1
      } else {
        this.tabSort = 0
      }
      // 当前点击列名
      this.seq2 = {}
      if (this.tabSort !== 0) {
        this.tabProp = column.prop + '_seq'
        this.seq2[this.tabProp] = this.tabSort
      }
      // 调后端接口，把后端需要的参数传递给后端，就可以实现排序
      this.load()
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
      if (flexWidth > 350 && str == 'description') {
        // 设置最大宽度
        flexWidth = 350
      }
      if (flexWidth > 5000) {
        // 设置最大宽度
        flexWidth = 5000
      }
      return flexWidth + 'px'
    }




  },
  props: {
    dbID: Number,
    globalDataset:Object
  },
  data() {
    return {
      pb_gene: '',
      celline: '',

      currentPage: 1,
      total1: 10,
      total2: 10,
      pageSize: 5,

      activeNames: ['1'],



      tableData1: [],
      tableData2: [],

      seq1: {},
      seq2: {},
      paging: {
        "start": 0, //起始数据点（分页）
        "length": 5
      }


    };
  },
  computed: {
  },
  created() {
    this.load();
    // console.log(this.dbID);
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

.el-collapse-item {
  border: rgb(2, 119, 80) 1px solid;
  border-top: none;
}

.el-col {
  /* border-radius: 4px; */
}

.grid-content {
  /* border-radius: 4px; */
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


