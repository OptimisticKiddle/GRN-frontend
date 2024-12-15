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
              <el-form-item label="Organ :">
                <el-select
                  v-model="filter.sample_source"
                  placeholder="Please select Organ"
                  style="width: 100%;"
                >
                  <el-option
                    v-for='item in sampleSourceList'
                    :key='item'
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="Tissue :"
                style="margin-left: 10px"
              >
                <el-select
                  v-model="filter.tissue"
                  placeholder="Please select Tissue"
                  style="width: 100%;"
                >
                  <el-option
                    v-for='item in tissueList'
                    :key='item'
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="Cell Type :"
                style="margin-left: 10px"
              >
                <el-select
                  v-model="filter.cell_type"
                  placeholder="Please select Cell Type"
                  style="width: 100%;"
                >
                  <el-option
                    v-for='item in cellTypeList'
                    :key='item'
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
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
            v-loading="loading"
          >
            <!-- prop是表头属性名 label是展示的列名 宽度不写就是自适应-->

            <el-table-column
              prop="id"
              label="ID"
              align="center"
            />

            <el-table-column
              prop="gsm"
              label="Accession"
              align="center"
            >
              <template v-slot="scope">
                <a
                  :href="`https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=${scope.row.gsm}`"
                  target=_blank
                >{{scope.row.gsm}}</a>
              </template>
            </el-table-column>
            <el-table-column
              prop="sample_source"
              label="Organ"
              align="center"
            />
            <el-table-column
              prop="tissue"
              label="Tissue"
              align="center"
            />
            <el-table-column
              prop="cell_type"
              label="Cell Type"
              align="center"
            />

            <el-table-column
              label="Base GRN"
              align="center"
            >
              <template v-slot="scope">
                <a
                  :href="baseUrl + `/api/download/${scope.row.gse.substring(3)}/${scope.row.gsm.substring(3)}/GRN.mm`"
                  download
                >
                  <el-icon style="text-align: middle; vertical-align: -15%;">
                    <Download />
                  </el-icon></a>
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
      baseUrl: process.env.VUE_APP_BASE_URL,
      currentPage: 1,
      total: 0,
      pageSize: 10,
      sampleSourceList: [],
      tissueList: [],
      cellTypeList: [],
      activeNames: ['1', '2', '3'],
      globalID: 1,
      timer: '',
      loading: false,

      tableData: [],
      filter: {
        sample_source: '',
        tissue: '',
        cell_type: '',
      },
      paging: {
        "start": 0, //起始数据点（分页）
        "length": 10
      }
    };
  },
  watch: {
    'filter.sample_source' (val) {
      console.log(val);
      this.filter.tissue = '';
      this.filter.cell_type = '';
      this.get_tissue();
      this.get_celltype();
    },
    'filter.tissue' (val) {

      console.log(val);
      if (val && val.length) {
        this.filter.cell_type = '';
        this.get_celltype();
      }
    }
  },

  methods: {
    load () {

      this.get_samplesource();
      this.get_tissue();
      this.get_celltype();
      this.get_all();

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
      if (this.filter.sample_source && this.filter.sample_source.length) {
        this.filter.sample_source = '';
      }
      else {
        this.filter.tissue = '';
        this.filter.cell_type = '';
        this.get_celltype();
      }
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
    get_samplesource () {
      request.get("/get_samplesource_enum",
      ).then(res => {
        this.sampleSourceList = res.data;
      })
    },
    get_tissue () {
      request.get(`/get_tissue_enum?sample_source=${this.filter.sample_source}`
      ).then(res => {
        this.tissueList = res.data;
      })

    },
    get_celltype () {
      request.get(`/get_celltype_enum?sample_source=${this.filter.sample_source}&tissue=${this.filter.tissue}`
      ).then(res => {
        this.cellTypeList = res.data;
      })

    },
    get_all () {
      this.loading = true;

      request.post("/get_overall_data",
        {
          filter: this.filter,
          paging: this.paging

        }).then(res => {
          this.loading = false

          this.tableData = res.data;
          this.total = res.records_sum;

        }).catch(err => {
          this.loading = false
          this.$message({
            message: 'error',
            type: "error",
          });
        })
    }

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