<template>
  <!-- 主体 -->

  <!-- <div class="clearfix"> -->
  <el-collapse v-model="activeNames">
    <el-collapse-item name="1">

      <template #title>
        <el-icon>
          <Menu />
        </el-icon>&nbsp Basic Info
      </template>
      <!-- 左边的数据展示 -->
      <div class="col-md-6 " style="margin-top: 5%;">
        <el-descriptions title="" :column="1" :size="size" border>
          <el-descriptions-item label="ID :" width="5vw" label-align="right">{{ dbID
          }}</el-descriptions-item>
          <el-descriptions-item label="pb_Gene :" width="5vw" label-align="right">{{ dataSet.pb_gene
          }}</el-descriptions-item>
          <el-descriptions-item label="pb_Ensembl :" width="5vw" label-align="right">{{ dataSet.pb_ensembl
          }}</el-descriptions-item>
          <el-descriptions-item label="Sample Num :" width="5vw" label-align="right">{{ dataSet.n_sample
          }}</el-descriptions-item>
          <el-descriptions-item label="Cell Line :" width="5vw" label-align="right">{{ dataSet.celline
          }}</el-descriptions-item>
          <el-descriptions-item label="Method :" width="5vw" label-align="right">{{ dataSet.method
          }}</el-descriptions-item>
          <el-descriptions-item label="Condition :" width="5vw" label-align="right">{{ dataSet.conditions
          }}</el-descriptions-item>
          <el-descriptions-item label="Accession :" width="5vw" label-align="right">
            <div v-html="dataSet.accession"></div>
          </el-descriptions-item>
          <el-descriptions-item label="DataSource :" width="5vw" label-align="right">{{ dataSet.datasource
          }}</el-descriptions-item>

        </el-descriptions>
      </div>
      <!-- 右边的图片 -->
      <section class="col-md-6 showimg panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">

          <span style="font-size: 16px;" class="panel-title">Samples Correlation</span><sup><span data-html="true"
              data-toggle="tooltip" data-placement="right"
              title="Sample correlation matrix of experimental group and control group"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/cor_plot.png`"
             :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_cor_plot.png`" target="_blank"
             style="position: absolute;right: 2vw;">
             <el-button type="warning" size="small" circle>
              <el-icon>
                <Download />
              </el-icon>
            </el-button>
          </a>
              
        </header>
        <div class="panel-body">
          <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/cor_plot.png`" alt="">
        </div>
      </section>



    </el-collapse-item>
  </el-collapse>

  <!-- </div> -->
  <!-- 下面的tab -->
  <div style="margin: 2% 0; ">

    <el-tabs type="border-card" class="demo-tabs ">


      <el-tab-pane label="Peaks Distribution" class="TSS_distribution">

        <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
          <header class="panel-heading" style="position: relative;">
            <span style="font-size: 16px;" class="panel-title">Dist To TSS</span>
            <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                  style="font-size: 70%"> </i>
              </span></sup>
            <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`"
             :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`" target="_blank"
              style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                  <Download />
                </el-icon></el-button></a>
          </header>
          <div class="panel-body">
            <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt="">
          </div>
        </section>
        <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
          <header class="panel-heading" style="position: relative;">
            <span style="font-size: 16px;" class="panel-title">Heat Map</span>
            <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                title="Plot the heatmap of peaks align to flank sequences of TSS"><i class="ti-info-alt"
                  style="font-size: 70%"> </i>
              </span></sup>
            <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`"
             :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_peakHeatmap.png`" target="_blank"
              style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                  <Download />
                </el-icon></el-button></a>
          </header>
          <div class="panel-body">

            <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt="">
          </div>
        </section>
        <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
          <header class="panel-heading" style="position: relative;">
            <span style="font-size: 16px;" class="panel-title">Distribution Spectrum Plot</span>
            <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                title="Visualize the distribution spectra of peaks in the 1kb range for multiple samples"><i class="ti-info-alt"
                  style="font-size: 70%"> </i>
              </span></sup>
            <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAvgProf.png`"
             :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotAvgProf.png`" target="_blank"
              style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                  <Download />
                </el-icon></el-button></a>
          </header>
          <div class="panel-body">
            <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAvgProf.png`" alt="">
          </div>
        </section>


      </el-tab-pane>
      <el-tab-pane label="Intervals Annotation">
        <section class="col-md-5  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
          <header class="panel-heading" style="position: relative;">
            <span style="font-size: 16px;" class="panel-title">Peaks Feature Distribution Plot</span>
            <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                title="The distribution of different samples in the characterized regions of the genome"><i class="ti-info-alt"
                  style="font-size: 70%"> </i>
              </span></sup>
            <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAnnoBar.png`"
             :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotAnnoBar.png`" target="_blank"
              style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                  <Download />
                </el-icon></el-button></a>
          </header>
          <div class="panel-body">
            <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAnnoBar.png`" alt="">
          </div>
        </section>
        <div class="col-md-7">
          <section class=" panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Peak Genomic Annotation Plot</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                title="Pieplot from peak genomic annotation"><i class="ti-info-alt"
                  style="font-size: 70%"> </i>
              </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAnnoPie.png`"
               :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotAnnoPie.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">
              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAnnoPie.png`" alt="">
            </div>
          </section>
        </div>
        <div class="col-md-7">
          <section class=" panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Annotation Overlap</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                title="Comparison of overlapping annotations of different samples"><i class="ti-info-alt"
                  style="font-size: 70%"> </i>
              </span></sup>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/upsetplot.png`"
               :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_upsetplot.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">
              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/upsetplot.png`" alt="">
            </div>
          </section>
        </div>
        <!-- <div class="col-md-5">
            <img src="@/assets\plots\③_struct_1.png" alt="">
          </div>
          <div class="col-md-7">
            <img src="@/assets\plots\③_struct_2.png" alt="">

            <img src="@/assets\plots\③_struct_3.png" alt="">
          </div> -->
      </el-tab-pane>

    </el-tabs>


  </div>
</template>



<script>
import request from "@/utils/request";
// import { log } from "console";
import bus from 'vue3-eventbus'
export default {
  name: "Total",
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