<template>

  <!-- tab -->


  <el-tabs type="border-card" class="demo-tabs ">

    <el-tab-pane label="Control" >
      <!-- 前两张图---核小体 -->
      <h2 >Nucleosome banding pattern</h2>
      <hr style="margin: 0  20px 20px 20px;" color='green'>
 <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Scatter plots of nCount_peaks and nucleosome_signal</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
            <!-- 下载链接改了  但是命名还没改 -->
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_nucleosome_DensityScatter.png`"
          
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"    
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_nucleosome_DensityScatter.png`" alt="">
        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Histogram of nucleosome_signal and fragments distribution</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_nucleosome_FragmentHistogram.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">

          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_nucleosome_FragmentHistogram.png`" alt="">
        </div>
      </section>
     </div>
         <!-- 中间两张图---转录起始位点富集分数 -->
         <h2 >Transcriptional start site (TSS) enrichment score</h2>
      <hr style="margin: 0  20px 20px 20px;" color='green'>
     <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Scatter plots of nCount_peaks and TSS enrichment</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_TSS_DensityScatter.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_TSS_DensityScatter.png`" alt="">
        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">TSS enrichment score at different distances from TSS</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_TSS_Plot.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_TSS_Plot.png`" alt="">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt=""> -->
        </div>
      </section>
     </div>
              <!-- 最后两张图---小提琴图 -->
              <h2 >Data quality visualization</h2>
      <hr style="margin: 0  20px 20px 20px;" color='green'>
     <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Cell resds count</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_read_counts.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_read_counts.png`" alt="">

        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Overall data quality indicators</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_QC_overall.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/WT_QC_overall.png`" alt="">

          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt=""> -->
        </div>
      </section>
     </div>

    </el-tab-pane>
    <el-tab-pane label="Treat" >
      <!-- 前两张图---核小体 -->
      <h2 >Nucleosome banding pattern</h2>
      <hr style="margin: 0  20px 20px 20px;" color='green'>
 <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Scatter plots of nCount_peaks and nucleosome_signal</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
            <!-- 下载链接改了  但是命名还没改 -->
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_nucleosome_DensityScatter.png`"
          
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"    
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_nucleosome_DensityScatter.png`" alt="">
        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Scatter plots of nCount_peaks and TSS enrichment</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_nucleosome_FragmentHistogram.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">

          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_nucleosome_FragmentHistogram.png`" alt="">
        </div>
      </section>
     </div>
         <!-- 中间两张图---转录起始位点富集分数 -->
         <h2 >Transcriptional start site (TSS) enrichment score</h2>
      <hr style="margin: 0  20px 20px 20px;" color='green'>
     <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Scatter plots of nCount_peaks and TSS enrichment</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_TSS_DensityScatter.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_TSS_DensityScatter.png`" alt="">
        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">TSS enrichment score at different distances from TSS</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_TSS_Plot.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_TSS_Plot.png`" alt="">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt=""> -->
        </div>
      </section>
     </div>
              <!-- 最后两张图---小提琴图 -->
              <h2 >Data quality visualization</h2>
      <hr style="margin: 0  20px 20px 20px;" color='green'>
     <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Cell resds count</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_read_counts.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_read_counts.png`" alt="">

        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Overall data quality indicators</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_QC_overall.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/QC/KO_QC_overall.png`" alt="">

          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt=""> -->
        </div>
      </section>
     </div>

    </el-tab-pane>

  </el-tabs>



</template>



<script>
import request from "@/utils/request";
// import { log } from "console";
import bus from 'vue3-eventbus'
export default {
  name: "QC",
  components: {

  },
  props: {
    dbID: Number,
  },
  data() {
    return {
      size: 'large',
      activeNames: ['1'],

      dataSet: {},

    }

  },
  methods: {
    load() {


      request.post("/get_single_data",
        {
          id: this.dbID
        }).then(res => {

          this.dataSet = res.data;


        })


    },
    handDown() {
      let a = document.createElement("a"); //创建一个a元素
      a.href = '';    //a元素图片地址
      a.download = `http://43.143.155.140/atac_db/${this.dbID}/plots/cor_plot.png`; //图片名
      a.click();
    }

  },
  created() {
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
    this.load();



  },
  beforeDestroy() {
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