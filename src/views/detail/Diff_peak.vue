<template>
  <!-- 主体 -->
  <!-- 上面的筛选 -->
  <!-- <router-view></router-view> -->
  <div style="margin-bottom: 2%; overflow: hidden;">
    <!-- 筛选面板 -->

    <el-collapse v-model="activeNames">
      <el-collapse-item name="0">
        <!-- 筛选面板title -->
        <template #title>
          <el-icon>
            <Search />
          </el-icon>&nbsp; Search
        </template>
        <el-form ref="form" :model="filter" label-width="120px">
          <div class="formRow1">

            <el-form-item label="Chr :">
              <el-input v-model="filter.chr" :fetch-suggestions="querySearch" placeholder="e.g. chr2" clearable
                style="width: 100px;"></el-input>
            </el-form-item>
            <el-form-item label="Gene_chr :">
              <el-input v-model="filter.gene_chr" clearable style="width: 100px;"></el-input>
            </el-form-item>

            <el-form-item label="Gene_id :">
              <el-input v-model="filter.gene_id" placeholder="e.g. ENSG00000127616.21" clearable
                style="width: 200px;"></el-input>
            </el-form-item>
            <el-form-item label="Transcript_id :">
              <el-input v-model="filter.transcript_id" placeholder="e.g. ENST00000587988.5" clearable
                style="width: 200px;"></el-input>
            </el-form-item>
          </div>

          <div class="formRow3">
            <el-form-item style="margin-left: -120px;">
              <el-button type="success" @click="onSubmit" style="width: 100px;">Submit</el-button>
              <el-button @click="onReset" style="margin-left: 100px;width: 100px;">Reset</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-collapse-item>
    </el-collapse>

  </div>

  <div style="margin: 0 auto;">
    <!-- 展示面板 -->

    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <!-- 展示面板title -->
        <template #title>
          <i class="ti-layers"></i>&nbsp; Diff Peaks Data <sup><span data-html="true" data-toggle="tooltip"
              data-placement="right" title="The meaning of columns is explained in the Help page."><i class="ti-info-alt"
                style="font-size: 70%"> </i></span></sup>
        </template>


        <!-- 表格展示 -->
        <el-table :data="tableData" border stripe table-layout="auto" header-cell-class-name="header-cell-class-name"
          style="color: black;margin-top: 20px;" @sort-change="sortChange" 
    @filter-change="onSubmit">
          <!-- prop是表头属性名 label是展示的列名 宽度不写就是自适应-->
          <el-table-column prop="peak_id" label="Peak ID" align="center" width="100px">

          </el-table-column>
          <!-- 待后续修改，属性名下筛选框 -->
          <!-- <el-table-column prop="chr" label="Chr" :filters="filter" align="center">
            <template #header >
              <el-input v-model="filter.chr"  size="mini" />
            </template>
          </el-table-column> -->
          <el-table-column prop="chr" label="Chr"  align="center">
          </el-table-column>
            <el-table-column prop="start" label="Start" :sortable="'custom'" align="center" width="100px" />
            <el-table-column prop="end" label="End" :sortable="'custom'" align="center" width="100px" />
            <el-table-column prop="width" label="Width" :sortable="'custom'" align="center" width="90px" />
            <el-table-column prop="conc" label="Conc" :sortable="'custom'" align="center" width="90px" />
            <el-table-column prop="conc_ctrl" label="Conc Ctrl" :sortable="'custom'" align="center" width="110px" />
            <el-table-column prop="conc_treat" label="Conc Treat" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="fold" label="Fold" :sortable="'custom'" align="center" width="100px" />
            <el-table-column prop="p_value" label="P.Value" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="FDR" label="FDR" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="annotation" label="Annotation" align="center"
              :width="flexColumnWidth('annotation', tableData)" />
            <el-table-column prop="gene_chr" label="Gene Chr" align="center" width="110px" />
            <el-table-column prop="gene_start" label="Gene Start" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="gene_end" label="Gene End" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="gene_len" label="Gene Length" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="gene_strand" label="Gene Strand" align="center" width="130px" />
            <el-table-column prop="gene_id" label="Gene ID" align="center" width="120px" />
            <el-table-column prop="transcript_id" label="Transcript ID" align="center" width="130px" />


            <el-table-column prop="distance_to_tss" label="DIS To TSS" sortable align="center" width="130px" />


        </el-table>
        <div class="table-foot" style="margin: 3vh auto;">
          <!-- 下载 -->
          <el-button type="primary" plain @click="onDownload"><el-icon>
              <Download />
            </el-icon>CSV</el-button>
          <!-- 分页 -->
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[5, 10, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>

      </el-collapse-item>
    </el-collapse>



    <!-- 下面的tab -->

    <div style="margin: 2% 0;">
      <el-tabs type="border-card" class="demo-tabs ">


        <el-tab-pane label="Peaks Distribution" class="TSS_distribution">
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Dist To TSS</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="The distance from the diff peak (binding site) to the TSS of the nearest gene"><i
                    class="ti-info-alt" style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotDistToTSS.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diffPeaks_plotDistToTSS.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotDistToTSS.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Heat Map</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Plot the heatmap of diff peaks align to flank sequences of TSS"><i class="ti-info-alt"
                    style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diff_dis_TSS_Heatmap.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diff_dis_TSS_Heatmap.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diff_dis_TSS_Heatmap.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Distribution Spectrum Plot</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Visualize the distribution spectra of diff peaks in the 3kb range"><i class="ti-info-alt"
                    style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diff_plotAvgProf.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diff_plotAvgProf.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diff_plotAvgProf.png`" alt="">
            </div>
          </section>
          <!-- <div class="col-md-4">
            <img src="@/assets\plots\④_TSS_1.png" alt="">
          </div>
          <div class="col-md-4">
            <img src="@/assets\plots\④_TSS_2.png" alt="">
          </div>
          <div class="col-md-4">
            <img src="@/assets\plots\④_TSS_3.png" alt="">
          </div> -->
        </el-tab-pane>

        <el-tab-pane label="Intervals Annotation">
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Diff Peaks Feature Distribution</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Distribution of differential peaks in characteristic regions of the genome"><i
                    class="ti-info-alt" style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotAnnoBar.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diffPeaks_plotAnnoBar.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotAnnoBar.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Diff Peak Genomic Annotation</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Pieplot from diff peak genomic annotation"><i class="ti-info-alt" style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotAnnoPie.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diffPeaks_plotAnnoPie.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotAnnoPie.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Annotation Overlap</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Comparison of overlapping annotations of diff peaks"><i class="ti-info-alt"
                    style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_upsetplot.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diffPeaks_upsetplot.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_upsetplot.png`" alt="">
            </div>
          </section>
          <!-- <div class="col-md-4">
            <img src="@/assets\plots\④_struct_1.png" alt="">
          </div>
          <div class="col-md-4">
            <img src="@/assets\plots\④_struct_2.png" alt="">
          </div>
          <div class="col-md-4">
            <img src="@/assets\plots\④_struct_3.png" alt="">
          </div> -->
        </el-tab-pane>

        <el-tab-pane label="Difference Analysis">
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">PCA Plot</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Principal Component Analysis plot"><i class="ti-info-alt" style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotPCA.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_plotPCA.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotPCA.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">MA Plot</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Generates MA and scatter plots of differential binding analysis results."><i class="ti-info-alt"
                    style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotMA.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_plotMA.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotMA.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Volcano Plot</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Generates volcano plots of differential binding analysis results."><i class="ti-info-alt"
                    style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotVolcano.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_plotVolcano.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotVolcano.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Box Plot</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Boxplots for read count distributions within differentially bound sites"><i class="ti-info-alt"
                    style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotBox.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_plotBox.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotBox.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Heat Map</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Heat maps of binding sites for different samples"><i class="ti-info-alt" style="font-size: 70%">
                  </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotHeatmap.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_plotHeatmap.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotHeatmap.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Profile Plot</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="This plot shows how the differentially bound sites are divided into Gain and Loss groups, and how sample groups belonging to each of the two contrast conditions (Resistant and Responsive) result in differently colored heatmaps."><i
                    class="ti-info-alt" style="font-size: 70%"> </i>
                </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotProfile.png`"
                :download="`id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_plotProfile.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotProfile.png`" alt="">
            </div>
          </section>

        </el-tab-pane>

      </el-tabs>
    </div>


  </div>
</template>



<script>
import request from "@/utils/request";



export default {
  name: "Diff_peak",
  components: {

  },


  methods: {

    load() {
      request.post("/get_diff_peak_data",
        {
          id: this.dbID,

          filter: this.filter,
          seq: this.seq,
          paging: this.paging

        }).then(res => {
          this.tableData = res.data;
          this.total = res.records_sum;

        })
    },
    onSubmit() {
      request.post("/get_diff_peak_data",
        {
          id: this.dbID,
          filter: this.filter,
          seq: {},
          paging: {
            "start": 0, //起始数据点（分页）
            "length": 10
          }
        }).then(res => {
          this.tableData = res.data;
          this.total = res.records_sum;
          this.currentPage = 1;
        })
    },
    onReset() {
      this.filter = {}
    },
    onDownload() {
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.globalDataset.pb_gene}_${this.globalDataset.cell_line}_diff_peak_data.csv`;
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

    querySearch(queryString, cb) {
      if (queryString == '') return   //如果输入框无内容，不调接口
      this.filter.chr = queryString
      request.post("https://console-mock.apipost.cn/mock/7e333c71-5b29-4949-80f9-914425f760eb/get_diff_peak_data?apipost_id=c4f476",
        {
          id: this.dbID,
          filter: this.filter,
          seq: this.seq,
          paging: this.paging
        }).then(res => {

          this.tableData = res.data;
          this.total = res.records_sum;
          /* var List = this.tableData;
          var results = queryString ? List.filter(this.createFilter(queryString)) : List;    
          // 调用 callback 返回建议列表的数据
          cb(results ); */
        })

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

      if (flexWidth > 1000) {
        // 设置最大宽度
        flexWidth = 1000
      }
      return flexWidth + 'px'
    }




  },
  props: {  //父组件向子组件传递的值只会在mount阶段挂载到页面一次，之后便不再执行这个阶段。
    dbID: Number,
    globalDataset:Object
    // dataSet: {
    //   type: Object,
    //   default() {
    //     return {}
    //   }
    // }
  },
  data() {
    return {
      pb_gene: '',
      celline: '',

      currentPage: 1,
      total: 0,
      pageSize: 10,

      activeNames: ['1'],
      // 关于排序的属性
      tabSort: 1, //该字段代表升序还是降序 假设：1正序 -1倒序
      tabProp: '',//prop绑定的字段名


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
  margin-left: -5vw;
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
