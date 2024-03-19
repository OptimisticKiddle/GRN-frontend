<template>

  <!-- tab -->


  <el-tabs type="border-card" class="demo-tabs ">


    <el-tab-pane label="Control" >
 <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Dist To TSS</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt="">
        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Heat Map</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">

          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt="">
        </div>
      </section>
     </div>
     <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Dist To TSS</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt="">
        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Heat Map</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">

          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt="">
        </div>
      </section>
     </div>
     <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Dist To TSS</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt="">
        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Heat Map</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">

          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt="">
        </div>
      </section>
     </div>

    </el-tab-pane>
    <el-tab-pane label="TERAT" >
 <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Dist To TSS</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt="">
        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Heat Map</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">

          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt="">
        </div>
      </section>
     </div>
     <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Dist To TSS</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt="">
        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Heat Map</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">

          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt="">
        </div>
      </section>
     </div>
     <div class="TSS_distribution">
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Dist To TSS</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt="">
        </div>
      </section>
      <section class="col-md-8  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Heat Map</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">

          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt="">
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

img {
  width: 100%;

  object-fit: cover;
}

.TSS_distribution {
  display: flex;
  justify-content: space-between;
}
</style>