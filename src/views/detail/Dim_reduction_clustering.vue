<template>

  <!-- 2--中间的一张图 -->
  <!-- 降维 -->
  <h2>Dimensionality reduction</h2>
  <hr
    style="margin: 0  20px 20px 20px;"
    color='green'
  >
  <div class="col-md-12 center-panel">
    <section
      class="col-md-8  panel panel-tertiary "
      data-portlet-item
    >
      <header
        class="panel-heading"
        style="position: relative;"
      >
        <span
          style="font-size: 16px;"
          class="panel-title"
        >Correlation between depth and reduced dimension components</span>
        <sup><span
            data-html="true"
            data-toggle="tooltip"
            data-placement="right"
            title="TF kinetic activity was shown between the two types of cells (ctrl, treat)"
          ><i
              class="ti-info-alt"
              style="font-size: 70%"
            > </i>
          </span></sup>

        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/Dim_reduction_DepthCor.svg`"
          download
          style="position: absolute;right: 2vw;"
        ><el-button
            type="warning"
            size="small"
            circle
          ><el-icon>
              <Download />
            </el-icon></el-button></a>
      </header>
      <div class="panel-body twoimg">

        <img
          :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/Dim_reduction_DepthCor.svg`"
          alt=""
        >
      </div>
    </section>
  </div>

  <div style="margin-bottom: 2%; overflow: hidden;"></div>

  <h2>Clustering</h2>
  <hr
    style="margin: 0  20px 20px 20px;"
    color='green'
  >

  <div class="col-md-12 center-panel">
    <section
      class="col-md-8  panel panel-tertiary "
      data-portlet-item
    >
      <header
        class="panel-heading"
        style="position: relative;"
      >
        <span
          style="font-size: 16px;"
          class="panel-title"
        >Clustering results of the merged data</span>
        <sup><span
            data-html="true"
            data-toggle="tooltip"
            data-placement="right"
            title="TF kinetic activity was shown between the two types of cells (ctrl, treat)"
          ><i
              class="ti-info-alt"
              style="font-size: 70%"
            > </i>
          </span></sup>

        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/Cluster_DimPlot.svg`"
          download
          style="position: absolute;right: 2vw;"
        ><el-button
            type="warning"
            size="small"
            circle
          ><el-icon>
              <Download />
            </el-icon></el-button></a>
      </header>
      <div class="panel-body twoimg">

        <img
          :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/Cluster_DimPlot.svg`"
          alt=""
        >
      </div>
    </section>
  </div>

</template>



<script>


export default {
  name: "Diff_footprint",
  props: {
    gse: String,
    gsm: String
  },
  data () {
    return {

      baseUrl: process.env.VUE_APP_BASE_URL,


      activeNames: ['1', '2', '3'],



    };
  },

  methods: {




  },


  created () {


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

.center-panel {
  display: flex;
  align-items: center;
  justify-content: center;
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





