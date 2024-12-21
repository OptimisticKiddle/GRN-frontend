<template>
  <!-- 主体 -->
  <div style="width: 95%;margin: 2% auto">
    <!-- 展示面板1 -->
    <div
      class="col-md-12"
      data-plugin-portlet
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template #title>
            <i class="ti-layers"></i>&nbsp; A demo of scATAC-seq data analysis <sup><span
                data-html="true"
                data-toggle="tooltip"
                data-placement="right"
                title="The meaning of columns is explained in the HELP page.</div>"
              ><i
                  class="ti-info-alt"
                  style="font-size: 70%"
                > </i></span></sup>
          </template>
          <div class="panel-body">
            <p>
              In this tutorial, we use scATAC-seq data to demonstrate the workflow of processing the gene activity matrix data to obtain a GRN. </p>

          </div>

        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- 展示面板2 -->
    <div
      class="col-md-12"
      data-plugin-portlet
      style="margin-top: 2%;margin-bottom: 3%;"
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <!-- 展示面板2 title -->
          <template #title>
            <i class="ti-layers"></i>&nbsp; Construct Gene Activity Matrix<sup><span
                data-html="true"
                data-toggle="tooltip"
                data-placement="right"
                title="<div align='left'> The meaning of columns is explained in the HELP page.</div>"
              ><i
                  class="ti-info-alt"
                  style="font-size: 70%"
                > </i></span></sup>
          </template>
          <div class="panel-body frame">
            <embed
              id="demo_html"
              type="text/html"
              src="1_GAM.html"
              style="width: 100%;height: 950px; border:none"
            >
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <!-- 展示面板2 -->
    <div
      class="col-md-12"
      data-plugin-portlet
      style="margin-top: 2%;margin-bottom: 3%;"
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <!-- 展示面板2 title -->
          <template #title>
            <i class="ti-layers"></i>&nbsp; Construct base GRN<sup><span
                data-html="true"
                data-toggle="tooltip"
                data-placement="right"
                title="<div align='left'> The meaning of columns is explained in the HELP page.</div>"
              ><i
                  class="ti-info-alt"
                  style="font-size: 70%"
                > </i></span></sup>
          </template>
          <div class="panel-body frame">
            <embed
              id="demo_html"
              type="text/html"
              src="2_GRN.html"
              style="width: 100%;height: 950px; border:none"
            >
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- 展示面板3 -->
    <div
      class="col-md-12"
      data-plugin-portlet
      style="margin-bottom: 3%;"
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="3">
          <!-- 展示面板2 title -->
          <template #title>
            <i class="ti-layers"></i>&nbsp; Filter data<sup><span
                data-html="true"
                data-toggle="tooltip"
                data-placement="right"
                title="<div align='left'> The meaning of columns is explained in the HELP page.</div>"
              ><i
                  class="ti-info-alt"
                  style="font-size: 70%"
                > </i></span></sup>
          </template>
          <div class="panel-body frame">
            <embed
              id="demo_html"
              type="text/html"
              src="3_wt&ko.html"
              style="width: 100%;height: 950px; border:none"
            >
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- 展示面板4 -->
    <div
      class="col-md-12"
      data-plugin-portlet
      style="margin-bottom: 5%;"
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="4">
          <!-- 展示面板2 title -->
          <template #title>
            <i class="ti-layers"></i>&nbsp; Refine GRN<sup><span
                data-html="true"
                data-toggle="tooltip"
                data-placement="right"
                title="<div align='left'> The meaning of columns is explained in the HELP page.</div>"
              ><i
                  class="ti-info-alt"
                  style="font-size: 70%"
                > </i></span></sup>
          </template>
          <div class="panel-body frame">
            <embed
              id="demo_html"
              type="text/html"
              src="4_refine.html"
              style="width: 100%;height: 950px; border:none"
            >
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
  
<style scoped>
.panel-body {
  border: none;
}
</style>
  
<script>

export default {
  name: "tutorial",
  data () {
    return {
      activeNames: ['1', '2'],
    }
  }
}


</script>