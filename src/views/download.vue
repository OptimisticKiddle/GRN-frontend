<template>
  <!-- 上面的筛选 -->

  <div style="width: 95%;margin: 2% auto; overflow: hidden;">
    <!-- 筛选面板 -->
    <div
      class="col-md-12"
      data-plugin-portlet
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <Search />
            </el-icon>&nbsp; Search
          </template>

          <el-form
            ref="form"
            :model="filter"
            label-width="130px"
          >
            <div class="formRow1">
              <el-form-item
                label="GSE :"
                style="margin-left: 10px"
              >
                <el-input
                  v-model="filter.gse"
                  placeholder="e.g. GSE200767"
                  clearable
                  style="width: 100%;"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="GSM :"
                style="margin-left: 10px"
              >
                <el-input
                  v-model="filter.gsm"
                  placeholder="e.g. GSM6893080"
                  clearable
                  style="width: 100%;"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="Sample Source :"
                style="margin-left: 10px"
              >
                <el-input
                  v-model="filter.sample_source"
                  placeholder="e.g. Frontal cortex (BA9)"
                  clearable
                  style="width: 100%;"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="Sample Type :"
                style="margin-left: 10px"
              >
                <el-input
                  v-model="filter.sample_type"
                  placeholder="e.g. SRA"
                  clearable
                  style="width: 100%;"
                ></el-input>
              </el-form-item>

            </div>

            <div class="formRow3">
              <el-form-item style="margin-left: -120px;">
                <el-button
                  type="success"
                  @click="onSubmit"
                  style="width: 100px;"
                >Submit</el-button>
                <el-button
                  @click="onReset"
                  style="margin-left: 100px;width: 100px;"
                >Reset</el-button>
              </el-form-item>
            </div>
          </el-form>

        </el-collapse-item>
      </el-collapse>
    </div>
  </div>

  <div style="width: 95%;margin: 1% auto; overflow: hidden;">
    <!-- 数据展示面板 -->
    <div
      class="col-md-12"
      data-plugin-portlet
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <!-- 展示面板title -->
          <template #title>
            <i class="ti-layers"></i>&nbsp; Download <sup><span
                data-html="true"
                data-toggle="tooltip"
                data-placement="right"
                title="The meaning of columns is explained in the Help page."
              ><i
                  class="ti-info-alt"
                  style="font-size: 70%"
                > </i></span></sup>
          </template>

          <!-- 表格展示 -->
          <el-table
            :data="tableData"
            border
            stripe
            table-layout="auto"
            highlight-current-row
            ref="multipleTable"
            header-cell-class-name="header-cell-class-name"
            style="color: black;margin-top: 20px;"
          >
            <!-- prop是表头属性名 label是展示的列名 宽度不写就是自适应-->

            <el-table-column
              prop="id"
              label="ID"
              align="center"
            />
            <el-table-column
              prop="gse"
              label="GSE"
              align="center"
            >
              <template v-slot="scope">
                <div v-html="scope.row.gse"></div>
              </template>
            </el-table-column>
            <el-table-column
              prop="gsm"
              label="GSM"
              align="center"
            >
              <template v-slot="scope">
                <div v-html="scope.row.gsm"></div>
              </template>
            </el-table-column>

            <el-table-column
              prop="sample_source"
              label="Sample Source"
              align="center"
            />
            <el-table-column
              prop="sample_type"
              label="Sample Type"
              align="center"
            />
            <el-table-column
              label="Gene-cell activity matrix"
              align="center"
            >
              <template v-slot="scope">
                <a
                  href="javascript:;"
                  @click="dlNarrowPeaks(scope.row)"
                >
                  <el-icon style="text-align: middle; vertical-align: -15%;">
                    <Download />
                  </el-icon>[tar]</a>
              </template>
            </el-table-column>
            <el-table-column
              label="Gene-Cluster activity matrix"
              align="center"
            >
              <template v-slot="scope">
                <a
                  href="javascript:;"
                  @click="dlNarrowPeaks(scope.row)"
                >
                  <el-icon style="text-align: middle; vertical-align: -15%;">
                    <Download />
                  </el-icon>[tar]</a>
              </template>
            </el-table-column>

            <el-table-column
              label="Base GRN"
              align="center"
            >
              <template v-slot="scope">
                <a
                  :href="`http://127.0.0.1:8000/download/${scope.row.id}_GRN.mm`"
                  download
                >
                  <el-icon style="text-align: middle; vertical-align: -15%;">
                    <Download />
                  </el-icon>[tar]</a>
              </template>
            </el-table-column>
          </el-table>
          <div
            class="table-foot"
            style="margin: 3vh auto;"
          >
            <div></div>

            <!-- 分页 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[5, 10, 20]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            >
            </el-pagination>
          </div>

        </el-collapse-item>
      </el-collapse>
    </div>

  </div>

</template>
  

<script >

import request from "@/utils/request";
import downloadFile from "@/utils/download";
import { fileDownloadHandle } from "@/utils/download";


export default {
  name: 'download',
  data () {
    return {

      currentPage: 1,
      total: 0,
      pageSize: 10,
      datasourceList: [],
      methodList: [],
      activeNames: ['1', '2', '3'],
      globalID: 1,
      timer: '',


      tableData: [],
      filter: {},
      paging: {
        "start": 0, //起始数据点（分页）
        "length": 10
      }
    };
  },

  methods: {
    load () {
      const loadingInstance = this.$loading({
        lock: true,
        background: 'rgba(255,255,255,0.8)'
      })
      request.post("/get_overall_data",
        {

          filter: this.filter,
          paging: this.paging

        }).then(res => {
          this.tableData = res.data;
          this.total = res.records_sum;
          loadingInstance.close()
        })

    },
    onSubmit () {
      request.post("/get_overall_data",
        {
          filter: this.filter,
          paging: this.paging
        }).then(res => {
          this.tableData = res.data;
          this.total = res.records_sum;
        })
    },
    onReset () {
      this.filter = {}
    },
    handleSizeChange (val) {   //改变当前每页的个数触发
      this.pageSize = val
      this.paging.length = val
      this.load();
    },
    handleCurrentChange (val) {   //改变当前页码触发
      this.currentPage = val
      this.paging.start = (val - 1) * this.paging.length
      this.load();
    },

    // 下载gene_activity_by_cluster函数
    dlNarrowPeaks (row) {
      let id = row.id;
      let pb_gene = row.pb_gene;
      let celline = row.celline;
      let href = `http://43.143.155.140/scATACdb/GSE195882/download_files/norm_gene_activity_by_cluster.tar.gz`;
      let fileName = `GSE195882_Prmt5_spleen_gene_activity_by_cluster.tar.gz`
      fileDownloadHandle(href, fileName)
    },
    // 下载gene_activity_by_cell函数
    dlDBA (row) {

    },

  },
  created () {
    this.load();
    // sessionStorage.setItem('dbID', ' ')
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
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  justify-content: space-between;

  margin-top: 20px;
  margin-right: 20px;
}

.formRow2 {
  display: grid;
  grid-template-columns: 2fr 3fr 3fr;
  justify-content: space-between;
  justify-self: center;

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

.el-collapse-item__content {
  background-color: #eeeeee36;
}
</style>