<template>
  <div style="margin-bottom: 2%;">

    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <!-- 展示面板title -->
        <template #title>
          <i class="ti-layers"></i>&nbsp; Cell meta data <sup><span data-html="true" data-toggle="tooltip"
              data-placement="right" title="The meaning of columns is explained in the Help page."><i class="ti-info-alt"
                style="font-size: 70%"> </i></span></sup>
        </template>

        <div class="col-md-12" data-plugin-portlet>
          <!-- 表格展示 -->
          <el-table :data="tableData" border stripe table-layout="auto" :cell-style="{ padding: '0px' }"
            ref="multipleTable" highlight-current-row header-cell-class-name="header-cell-class-name"
            style="color: black;margin-top: 20px;font-size: 10px;" @row-click="rowClick" @sort-change="sortChange">
            <!-- barcode、nCount_peaks、nFeature_peaks、nucleosome_signal、nucleosome_percentile、tss_enrichment、tss_percentile、high_tss、seurat_clusters、sample_type,nCount_RNA,nFeature_RNA-->
            <el-table-column prop="barcode" label="Motif" align="center" width="130px">
              <template #header>
                <div>barcode</div>
                <el-input v-model.trim="filter.motif" size="small" @keyup="onSubmit"></el-input>
              </template>
            </el-table-column>

            <el-table-column prop="nCount_peaks" label="Num" :sortable="'custom'" align="center" width="80px">
              <template #header>
                <el-popover placement="bottom" :width="100" trigger="hover">
                  <template #reference>
                    <span @mouseenter="openRange" data-id="num">nCount_peaks</span>
                  </template>
                  <div v-if="this.showRange.num" class="slider-demo-block">
                    <el-slider range :min="range.num_min" :max="range.num_max"
                      @change="rangeFilter($event, Object.keys(this.range)[0], Object.keys(this.range)[1])" />
                  </div>
                </el-popover>
              </template>
            </el-table-column> 

            <el-table-column prop="nFeature_peaks" label="Num" :sortable="'custom'" align="center" width="80px">
              <template #header>
                <el-popover placement="bottom" :width="100" trigger="hover">
                  <template #reference>
                    <span @mouseenter="openRange" data-id="num">nFeature_peaks</span>
                  </template>
                  <div v-if="this.showRange.num" class="slider-demo-block">
                    <el-slider range :min="range.num_min" :max="range.num_max"
                      @change="rangeFilter($event, Object.keys(this.range)[2], Object.keys(this.range)[3])" />
                  </div>
                </el-popover>
              </template>
            </el-table-column> 

            <el-table-column prop="nucleosome_signal" label="Num" :sortable="'custom'" align="center" width="80px">
              <template #header>
                <el-popover placement="bottom" :width="100" trigger="hover">
                  <template #reference>
                    <span @mouseenter="openRange" data-id="num">nucleosome_signal</span>
                  </template>
                  <div v-if="this.showRange.num" class="slider-demo-block">
                    <el-slider range :min="range.num_min" :max="range.num_max"
                      @change="rangeFilter($event, Object.keys(this.range)[4], Object.keys(this.range)[5])" />
                  </div>
                </el-popover>
              </template>
              <template v-slot="scope">
                {{ scope.row.nucleosome_signal > 0 ? scope.row.nucleosome_signal.toFixed(4) : 0 }}
              </template>
            </el-table-column>

            <el-table-column prop="nucleosome_percentile" label="Num" :sortable="'custom'" align="center" width="80px">
              <template #header>
                <el-popover placement="bottom" :width="100" trigger="hover">
                  <template #reference>
                    <span @mouseenter="openRange" data-id="num">nucleosome_percentile</span>
                  </template>
                  <div v-if="this.showRange.num" class="slider-demo-block">
                    <el-slider range :min="range.num_min" :max="range.num_max"
                      @change="rangeFilter($event, Object.keys(this.range)[0], Object.keys(this.range)[1])" />
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            
            <el-table-column prop="tss_enrichment" label="Protection Score Ctrl" :sortable="'custom'"
              align="center" width="180px">
              <template #header>
                <el-popover placement="bottom" :width="120" trigger="hover">
                  <template #reference>
                    <span @mouseenter="openRange" data-id="protection_score_ctrl">tss_enrichment</span>
                  </template>
                  <div v-if="this.showRange.protection_score_ctrl" class="slider-demo-block">
                    <el-slider range :min="range.protection_score_ctrl_min" :max="range.protection_score_ctrl_max"
                    :step="(range.protection_score_ctrl_max-range.protection_score_ctrl_min)/100"
                      @change="rangeFilter($event, Object.keys(this.range)[2], Object.keys(this.range)[3])" />
                  </div>
                </el-popover>
              </template>
              <template v-slot="scope">
                {{ scope.row.tss_enrichment > 0 ? scope.row.tss_enrichment.toFixed(4) : 0 }}
              </template>
            </el-table-column>

            <el-table-column prop="tss_percentile" label="Protection Score Treat" :sortable="'custom'"
              align="center" width="180px">
              <template #header>
                <el-popover placement="bottom" :width="120" trigger="hover">
                  <template #reference>
                    <span @mouseenter="openRange" data-id="protection_score_treat">tss_percentile</span>
                  </template>
                  <div v-if="this.showRange.protection_score_treat" class="slider-demo-block">
                    <el-slider range :min="range.protection_score_treat_min" :max="range.protection_score_treat_max"
                      :step="(range.protection_score_treat_max-range.protection_score_treat_min)/100"
                      @change="rangeFilter($event, Object.keys(this.range)[4], Object.keys(this.range)[5])" />
                  </div>
                </el-popover>
              </template>
            </el-table-column>

            <el-table-column prop="seurat_clusters" label="Motif" align="center" width="130px">
              <template #header>
                <div>high_tss</div>
                <el-input v-model.trim="filter.motif" size="small" @keyup="onSubmit"></el-input>
              </template>
            </el-table-column>

            <el-table-column prop="tc_seurat_clustersctrl" label="TC Ctrl" :sortable="'custom'" align="center" width="100px">
              <template #header>
                <el-popover placement="bottom" :width="120" trigger="hover">
                  <template #reference>
                    <span @mouseenter="openRange" data-id="tc_ctrl">seurat_clusters</span>
                  </template>
                  <div v-if="this.showRange.tc_ctrl" class="slider-demo-block">
                    <el-slider range :min="range.tc_ctrl_min" :max="range.tc_ctrl_max"
                    :step="(range.tc_ctrl_max-range.tc_ctrl_min)/100"

                      @change="rangeFilter($event, Object.keys(this.range)[6], Object.keys(this.range)[7])" />
                  </div>
                </el-popover>
              </template>
            </el-table-column>

            <el-table-column prop="sample_type" label="Motif" align="center" width="130px">
              <template #header>
                <div>sample_type</div>
                <el-input v-model.trim="filter.motif" size="small" @keyup="onSubmit"></el-input>
              </template>
            </el-table-column>

            <el-table-column prop="nCount_RNA" label="TC Treat" :sortable="'custom'" align="center" width="100px">
              <template #header>
                <el-popover placement="bottom" :width="120" trigger="hover">
                  <template #reference>
                    <span @mouseenter="openRange" data-id="tc_treat">nCount_RNA</span>
                  </template>
                  <div v-if="this.showRange.tc_treat" class="slider-demo-block">
                    <el-slider range :min="range.tc_treat_min" :max="range.tc_treat_max"
                    :step="(range.tc_treat_max-range.tc_treat_min)/100"
                      @change="rangeFilter($event, Object.keys(this.range)[8], Object.keys(this.range)[9])" />
                  </div>
                </el-popover>
              </template>
            </el-table-column>

            <el-table-column prop="nFeature_RNA" label="TF Activity" :sortable="'custom'" align="center" width="120px">
              <template #header>
                <el-popover placement="bottom" :width="120" trigger="hover">
                  <template #reference>
                    <span @mouseenter="openRange" data-id="tf_activity">nFeature_RNA</span>
                  </template>
                  <div v-if="this.showRange.tf_activity" class="slider-demo-block">
                    <el-slider range :min="range.tf_activity_min" :max="range.tf_activity_max"
                    :step="(range.tf_activity_max-range.tf_activity_min)/100"

                      @change="rangeFilter($event, Object.keys(this.range)[10], Object.keys(this.range)[11])" />
                  </div>
                </el-popover>
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
        </div>

      </el-collapse-item>
    </el-collapse>

  </div>
  <!-- 2--中间的一张图 -->
     <!-- 降维 -->
     <h2 >Dimensionality reduction</h2>
      <hr style="margin: 0  20px 20px 20px;" color='green'>
      <section class="col-md-12  panel panel-tertiary" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Correlation between depth and reduced dimension components</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="TF kinetic activity was shown between the two types of cells (ctrl, treat)"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>

          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_statistics.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/dim_reduce&cluster/dim_reduce_lsi.png`"
            :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_differential_statistics.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body twoimg">

          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_statistics.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/dim_reduce&cluster/dim_reduce_lsi.png`" alt="">
        </div>
      </section>
 
  <div style="margin-bottom: 2%; overflow: hidden;"></div>
    <!-- 3--下面的2张图展示 -->

  <h2 >Clustering</h2>
      <hr style="margin: 0  20px 20px 20px;" color='green'>
      <!-- 两个图展示 -->
      <section class="col-md-6  panel panel-tertiary" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Clustering results of the merged data</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="TF kinetic activity was shown between the two types of cells (ctrl, treat)"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>

          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_statistics.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/dim_reduce&cluster/merge_cluster.png`"
            :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_differential_statistics.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body twoimg">

          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_statistics.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/dim_reduce&cluster/merge_cluster.png`" alt="">
        </div>
      </section>
      <section class="col-md-6  panel panel-tertiary" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Label WT and KO on the clustering results</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Marked tf with significant change in activity score (p < 0.05)"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>

          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_log2foldChange.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/dim_reduce&cluster/merge_cluster_WT&KO.png`"
            :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_differential_log2foldChange.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body twoimg">
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/dim_reduce&cluster/merge_cluster_WT&KO.png`" alt="">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_log2foldChange.png`" alt=""> -->
        </div>
      </section>

</template>



<script>
import request from "@/utils/request";

export default {
  name: "Diff_footprint",
  props: {
    dbID: Number,
    globalDataset: Object
  },
  data() {
    return {
      pb_gene: '',
      celline: '',

      currentPage: 1,
      filter: {},
      total: 0,
      pageSize: 5,
      activeNames: ['1', '2', '3'],

      motif: '',
      motif_id: '',

      tableData: [],

      seq: {},
      paging: {
        "start": 0, //起始数据点（分页）
        "length": 5
      },
      range: {},
      showRange: {}
    };
  },

  methods: {
    load() {
      // request.post("/get_diff_footprint_data",
      request.post("/get_barcodes_meta_data",
        {
          id: this.dbID,
          filter: this.filter,
          seq: this.seq,
          paging: this.paging

        }).then(res => {
          this.tableData = res.data;
          this.total = res.records_sum;
          this.motif_id = res.data[0].motif.slice(0, 8);  // 默认刚渲染的时候选中第一行，展示第一张图
        });


    },
    onSubmit() {
      request.post("/get_barcodes_meta_data",
        {
          id: this.dbID,
          filter: this.filter,
          seq: this.seq,
          paging: this.paging
        }).then(res => {
          this.tableData = res.data;
          this.total = res.records_sum;
          this.currentPage = 1;
        })
    },
    onDownload() {
      this.pb_gene = sessionStorage.getItem('pb_gene');
      this.celline = sessionStorage.getItem('celline');

      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diff_footprint.csv`;
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
        this.tabSort = 0  // 默认顺序
      }
      // 当前点击列名
      this.seq = {}
      if (this.tabSort !== 0) {
        this.tabProp = column.prop + '_seq'
        this.seq[this.tabProp] = this.tabSort
      }
      // 调后端接口，把后端需要的参数传递给后端，就可以实现排序
      this.load()
    },
    // //  选中表格某一行,截取对应的motif和motif_id
    // rowClick(row) {
    //   this.motif = row.motif
    //   this.motif_id = row.motif.slice(0, 8);
    // },
    // 是否显示对应列的筛选滑块
    openRange(e) {
      this.showRange[e.currentTarget.dataset.id] = true
      // console.log(this.showRange);
    },
    // 滑动滑块后，重新过滤
    rangeFilter(val, min, max) {
      this.filter[min] = val[0]
      this.filter[max] = val[1]
      console.log("filter:");
      console.log(this.filter);
      this.load();
    },
    // 带e的小数保留四位小数
    formatFour(val) {
      let number = (String(val).indexOf('e') >= 0) ? String(val).replace(/^(.*\..{4})[0-9]*(e-[0-9]*)$/, "$1" + "$2") : val.toPrecision(4);
      return Number(number);
    },
  },
  watch: {
    tableData: function () {
      this.$nextTick(function () {
        this.$refs.multipleTable.setCurrentRow(this.tableData[0])  // 默认选中table的第一行，高亮显示
        this.motif = this.tableData[0].motif
        this.motif_id = this.tableData[0].motif.slice(0, 8);
      })
    }
  },

  created() {
    this.load();
    request.post("/get_diff_footprint_data_range",
      {
        id: this.dbID,
      }).then(res => {
        this.range = res;
      });

  },

}

</script>
  
<style scoped>
.el-form-item__label {
  color: black;
}

.header-cell-class-name {
  border-color: black;
  color: black;
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
  padding: 1vw;
  /* height: 800px; */
}

.showimg {

  height: 100%;

}

img {
  width: 100%;

}

.slider-demo-block {
  display: flex;
  align-items: center;
}
h2 {
  margin-left: 20px;
  color: #0e876d;
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.slider-demo-block .el-slider {
  margin: 0 12px;
}
</style>





