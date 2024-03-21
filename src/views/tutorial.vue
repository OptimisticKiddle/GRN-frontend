<template>
    <!-- 主体 -->
    <div style="width: 95%;margin: 2% auto">
        <!-- 展示面板1 -->
        <div class="col-md-12" data-plugin-portlet>
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <!-- 展示面板1 title -->
                    <template #title>
                        <i class="ti-layers"></i>&nbsp; A demo of scATAC-seq data analysis <sup><span data-html="true"
                                data-toggle="tooltip" data-placement="right"
                                title="The meaning of columns is explained in the HELP page.</div>"><i
                                    class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
                    </template>
                    <div class="panel-body">
                        <!-- 第一个面板 body 文字 -->
                        <p >
                            In this tutorial, we use scATAC-seq data from a mouse spleen cell line with Prmt5 gene knockout to demonstrate the workflow of processing the gene activity matrix data obtained from the download page of the GP-scATACdb website to obtain a GRN.                        </p>
                        <p >
                            The demo used in this tutorial can be downloaded from the <a href="http://43.143.155.140/scATACdb/tutorial_files/scATAC_GRN.ipynb">Construct base GRN</a> , <a href="http://43.143.155.140/scATACdb/tutorial_files/filter_mat.ipynb">Filter data</a> and  <a href="http://43.143.155.140/scATACdb/tutorial_files/refine_GRN.ipynb">Refine GRN</a> notebook.
                        </p>
                    </div>


                </el-collapse-item>
            </el-collapse>
        </div>
        <!-- 展示面板2 -->
        <div class="col-md-12" data-plugin-portlet style="margin-top: 2%;margin-bottom: 3%;">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="2">
                    <!-- 展示面板2 title -->
                    <template #title>
                        <i class="ti-layers"></i>&nbsp; Construct base GRN<sup><span data-html="true" data-toggle="tooltip"
                                data-placement="right"
                                title="<div align='left'> The meaning of columns is explained in the HELP page.</div>"><i
                                    class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
                    </template>
                    <div class="panel-body frame" >
						<embed id="demo_html" type="text/html" src="mm10_scATAC_GRN.html" style="width: 100%;height: 950px; border:none">
					</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <!-- 展示面板3 -->
        <div class="col-md-12" data-plugin-portlet style="margin-bottom: 3%;">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="3">
                    <!-- 展示面板2 title -->
                    <template #title>
                        <i class="ti-layers"></i>&nbsp; Filter data<sup><span data-html="true" data-toggle="tooltip"
                                data-placement="right"
                                title="<div align='left'> The meaning of columns is explained in the HELP page.</div>"><i
                                    class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
                    </template>
                    <div class="panel-body frame" >
						<embed id="demo_html" type="text/html" src="filter_mat.html" style="width: 100%;height: 950px; border:none">
					</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <!-- 展示面板4 -->
        <div class="col-md-12" data-plugin-portlet style="margin-bottom: 5%;">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="4">
                    <!-- 展示面板2 title -->
                    <template #title>
                        <i class="ti-layers"></i>&nbsp; Refine GRN<sup><span data-html="true" data-toggle="tooltip"
                                data-placement="right"
                                title="<div align='left'> The meaning of columns is explained in the HELP page.</div>"><i
                                    class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
                    </template>
                    <div class="panel-body frame" >
						<embed id="demo_html" type="text/html" src="refine_GRN.html" style="width: 100%;height: 950px; border:none">
					</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        
    </div>
    <el-backtop :bottom="20" :right="20">
    <div
      style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 45px;
        color: #15a585;
      "
    >
	<el-icon><Top /></el-icon>
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
    data() {
        return {
            activeNames: ['1','2'],
        }
    }
}


</script>