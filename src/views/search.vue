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
                  type="warning"
                  @click="onExample"
                  style="width: 100px;font-weight: 700;"
                >Example</el-button>
                <el-button
                  type="success"
                  @click="onSubmit"
                  style="margin-left: 100px;width: 100px;font-weight: 700;"
                >Submit</el-button>
                <el-button
                  @click="onReset"
                  style="margin-left: 100px;width: 100px;font-weight: 700;"
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
            <i class="ti-layers"></i>&nbsp; Overall Datasets <sup><span
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
            @row-click="rowClick"
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
              prop="organism"
              label="Organism"
              align="center"
            />

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
              label="Analysis"
              align="center"
            >
              <template #default>
                <!-- <el-button
                  link
                  type="primary"
                  size="big"
                  @click="handleClick"
                >
                  Visualization
                </el-button> -->

                <el-button
                  link
                  type="primary"
                  size="big"
                  @click="this.$router.push('/refine')"
                >
                  Detail
                </el-button>

              </template>
            </el-table-column>
          </el-table>
          <div
            class="table-foot"
            style="margin: 3vh auto;"
          >
            <!-- 下载 -->
            <!-- <el-button
              type="primary"
              plain
              @click="onDownload"
            ><el-icon>
                <Download />
              </el-icon>CSV</el-button> -->
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
  <el-backtop
    :bottom="20"
    :right="20"
  >
    <div style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 45px;
        color: #15a585;
        ">
      <el-icon>
        <Top />
      </el-icon>
    </div>
  </el-backtop>
</template>
  

<script >

import request from "@/utils/request";
import { computed } from 'vue';
import bus from 'vue3-eventbus'
import detail from "@/views/detail.vue";


export default {
  name: 'search',
  components: {
    detail

  },
  data () {
    return {
      currentPage: 1,
      total: 0,
      pageSize: 10,

      datasourceList: [],
      methodList: [],
      activeNames: ['1', '2'],
      timer: '',

      // 页面传输参数
      globalID: 1,
      globalDataset: {
        pb_gene: '',
        cell_line: ''
      },

      tableData: [],
      filter: {},
      filterId: null,
      n_sample_greater: null,
      n_sample_less: null,

      paging: {
        "start": 0, //起始数据点（分页）
        "length": 10
      }
    };
  },

  methods: {
    handleClick () {
      this.$router.push('/detail')
    },
    load () {
      const loadingInstance = this.$loading({
        lock: true,
        background: 'rgba(255,255,255,0.8)'
      })
      request.get("/get_datasource_enum",
      ).then(res => {
        this.datasourceList = res.data;
      })
      request.get("/get_method_enum",
      ).then(res => {
        this.methodList = res.data;
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
    onExample () {
      this.filter.gsm = '80';
    },
    onSubmit () {
      this.filter.id = !Number(this.filter.id) ? null : Number(this.filter.id);
      //   this.filter.n_sample_greater = !Number(this.filter.n_sample_greater) ? null : Number(this.filter.n_sample_greater);
      //   this.filter.n_sample_less = !Number(this.filter.n_sample_less) ? null : Number(this.filter.n_sample_less);

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
    onDownload () {
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = "http://43.143.155.140/download_overall_data";
      document.body.appendChild(link);
      link.click();
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
    //  选中表格某一行,对应id存储到globalID的函数
    rowClick (row, column) {
      this.globalID = row.id;
      this.globalDataset.pb_gene = row.pb_gene
      this.globalDataset.cell_line = row.celline
      this.timer = new Date().getTime()  //父组件中每次点击按钮重新加载子组件,与上面的:key="timer"对应
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
  margin-left: -4vw;
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
  grid-template-columns: 4fr 4fr 4fr 4fr;
  justify-content: space-between;

  margin-top: 20px;
  /* margin-right: 20px; */
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