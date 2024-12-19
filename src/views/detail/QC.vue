<template>

  <!-- tab -->

  <el-tabs
    type="border-card"
    class="demo-tabs "
  >

    <!-- 前两张图---核小体 -->
    <h2>Nucleosome banding pattern</h2>
    <hr
      style="margin: 0  20px 20px 20px;"
      color='green'
    >
    <div class="TSS_distribution">
      <section
        class="col-md-8  panel panel-tertiary"
        id="tutorial-panel-1"
        data-portlet-item
      >
        <header
          class="panel-heading"
          style="position: relative;"
        >
          <span
            style="font-size: 16px;"
            class="panel-title"
          >Scatter plots of nCount_peaks and nucleosome_signal</span>
          <sup><span
              data-html="true"
              data-toggle="tooltip"
              data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"
            ><i
                class="ti-info-alt"
                style="font-size: 70%"
              > </i>
            </span></sup>

          <a
            :href="baseUrl + `/app/download/${gse}/${gsm}/QC_Peaks_DensityScatter.svg`"
            download
            style="position: absolute;right: 2vw;"
          >
            <span style="color:white;margin-right: 5px;">Download Image:</span>

            <el-button
              type="warning"
              size="small"
              circle
            ><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img
            :src="baseUrl + `/app/static/GSE${gse}/GSM${gsm}/QC_Peaks_DensityScatter.svg`"
            alt=""
          >
        </div>
      </section>
      <section
        class="col-md-8  panel panel-tertiary"
        id="tutorial-panel-1"
        data-portlet-item
      >
        <header
          class="panel-heading"
          style="position: relative;"
        >
          <span
            style="font-size: 16px;"
            class="panel-title"
          >Histogram of nucleosome_signal and fragments distribution</span>
          <sup><span
              data-html="true"
              data-toggle="tooltip"
              data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"
            ><i
                class="ti-info-alt"
                style="font-size: 70%"
              > </i>
            </span></sup>
          <a
            :href="baseUrl + `/app/download/${gse}/${gsm}/QC_FragmentHistogram.svg`"
            download
            style="position: absolute;right: 2vw;"
          >
            <span style="color:white;margin-right: 5px;">Download Image:</span>

            <el-button
              type="warning"
              size="small"
              circle
            ><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">

          <img
            :src="baseUrl + `/app/static/GSE${gse}/GSM${gsm}/QC_FragmentHistogram.svg`"
            alt=""
          >
        </div>
      </section>
    </div>
    <!-- 中间两张图---转录起始位点富集分数 -->
    <h2>Transcriptional start site (TSS) enrichment score</h2>
    <hr
      style="margin: 0  20px 20px 20px;"
      color='green'
    >
    <div class="TSS_distribution">
      <section
        class="col-md-8  panel panel-tertiary"
        id="tutorial-panel-1"
        data-portlet-item
      >
        <header
          class="panel-heading"
          style="position: relative;"
        >
          <span
            style="font-size: 16px;"
            class="panel-title"
          >Scatter plots of nCount_peaks and TSS enrichment</span>
          <sup><span
              data-html="true"
              data-toggle="tooltip"
              data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"
            ><i
                class="ti-info-alt"
                style="font-size: 70%"
              > </i>
            </span></sup>
          <a
            :href="baseUrl + `/app/download/${gse}/${gsm}/QC_TSS_DensityScatter.svg`"
            download
            style="position: absolute;right: 2vw;"
          >
            <span style="color:white;margin-right: 5px;">Download Image:</span>

            <el-button
              type="warning"
              size="small"
              circle
            ><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img
            :src="baseUrl + `/app/static/GSE${gse}/GSM${gsm}/QC_TSS_DensityScatter.svg`"
            alt=""
          >
        </div>
      </section>
      <section
        class="col-md-8  panel panel-tertiary"
        id="tutorial-panel-1"
        data-portlet-item
      >
        <header
          class="panel-heading"
          style="position: relative;"
        >
          <span
            style="font-size: 16px;"
            class="panel-title"
          >TSS enrichment score at different distances from TSS</span>
          <sup><span
              data-html="true"
              data-toggle="tooltip"
              data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"
            ><i
                class="ti-info-alt"
                style="font-size: 70%"
              > </i>
            </span></sup>
          <a
            :href="baseUrl + `/app/download/${gse}/${gsm}/QC_TSSPlot.svg`"
            download
            style="position: absolute;right: 2vw;"
          >
            <span style="color:white;margin-right: 5px;">Download Image:</span>

            <el-button
              type="warning"
              size="small"
              circle
            ><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img
            :src="baseUrl + `/app/static/GSE${gse}/GSM${gsm}/QC_TSSPlot.svg`"
            alt=""
          >
        </div>
      </section>
    </div>
    <!-- 最后两张图---小提琴图 -->
    <h2>Data quality visualization</h2>
    <hr
      style="margin: 0  20px 20px 20px;"
      color='green'
    >
    <div class="TSS_distribution">
      <section
        class="col-md-8  panel panel-tertiary"
        id="tutorial-panel-1"
        data-portlet-item
      >
        <header
          class="panel-heading"
          style="position: relative;"
        >
          <span
            style="font-size: 16px;"
            class="panel-title"
          >Cell resds count</span>
          <sup><span
              data-html="true"
              data-toggle="tooltip"
              data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"
            ><i
                class="ti-info-alt"
                style="font-size: 70%"
              > </i>
            </span></sup>
          <a
            :href="baseUrl + `/app/download/${gse}/${gsm}/QC_hist.svg`"
            download
            style="position: absolute;right: 2vw;"
          >
            <span style="color:white;margin-right: 5px;">Download Image:</span>

            <el-button
              type="warning"
              size="small"
              circle
            ><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img
            :src="baseUrl + `/app/static/GSE${gse}/GSM${gsm}/QC_hist.svg`"
            alt=""
          >

        </div>
      </section>
      <section
        class="col-md-8  panel panel-tertiary"
        id="tutorial-panel-1"
        data-portlet-item
      >
        <header
          class="panel-heading"
          style="position: relative;"
        >
          <span
            style="font-size: 16px;"
            class="panel-title"
          >Overall data quality indicators</span>
          <sup><span
              data-html="true"
              data-toggle="tooltip"
              data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"
            ><i
                class="ti-info-alt"
                style="font-size: 70%"
              > </i>
            </span></sup>
          <a
            :href="baseUrl + `/app/download/${gse}/${gsm}/QC_VlnPlot.svg`"
            download
            style="position: absolute;right: 2vw;"
          >
            <span style="color:white;margin-right: 5px;">Download Image:</span>

            <el-button
              type="warning"
              size="small"
              circle
            ><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img
            :src="baseUrl + `/app/static/GSE${gse}/GSM${gsm}/QC_VlnPlot.svg`"
            alt=""
          >

        </div>
      </section>
    </div>

  </el-tabs>

</template>



<script>

export default {
  name: "QC",
  components: {

  },
  props: {
    gse: String,
    gsm: String
  },
  data () {
    return {
      size: 'large',
      activeNames: ['1'],
      baseUrl: process.env.VUE_APP_BASE_URL,
      dataSet: {},

    }

  },
  methods: {



  },
  created () {
    // console.log(this.dbID);

    // let router = useRouter()
    // 监听当前路由变化
    // watch(
    //   () => router.currentRoute.value,
    //   () => {
    //     // this.dbID = router.currentRoute.value.params.id;
    //     this.load();
    //   }
    // );
    // this.dbID = router.currentRoute.value.params.id;
    // this.load();



  },
  beforeDestroy () {
    // bus.off('ID')
  },
}


</script>

<style scoped>
.el-collapse-item__wrap,
.col-md-6 {
  padding: 2vw;
}

.showimg {
  width: 40vw;
}
h2 {
  margin-left: 20px;
  color: #0e876d;
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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