<template>
  <div style="margin-bottom: 2%;">
    <h2 >Perturbed gene activity shifts</h2>
      <hr style="margin: 0  20px 20px 20px;" color='green'>
      <section class="col-md-12  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">Gene activity of perturbed gene in treat and control data</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/KO_gene_activity/KO_gene_in_cluster.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/KO_gene_activity/KO_gene_in_cluster.png`" alt="">
        </div>
      </section>

</div>
<div style="margin-bottom: 2%; overflow: hidden;"></div>
  <!-- tab -->


  <el-tabs type="border-card" class="demo-tabs" style="margin-bottom: 2%; overflow: hidden;">


    <el-tab-pane label="Control" class="TSS_distribution">

      <section class="col-md-12  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
        <header class="panel-heading" style="position: relative;">
          <span style="font-size: 16px;" class="panel-title">The mapping between the peaks location, the perturbed gene and the normalized signal on each cluster</span>
          <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
              title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
                style="font-size: 70%"> </i>
            </span></sup>
          <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" -->
          <a :href="`http://43.143.155.140/scATACdb/GSE195882/KO_gene_activity/WT-KO_gene_in_genome.png`"
            :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
            target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
              circle><el-icon>
                <Download />
              </el-icon></el-button></a>
        </header>
        <div class="panel-body">
          <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt=""> -->
          <img :src="`http://43.143.155.140/scATACdb/GSE195882/KO_gene_activity/WT-KO_gene_in_genome.png`" alt="">
        </div>
      </section>

    </el-tab-pane>
    <el-tab-pane label="Treat" class="TSS_distribution">

<section class="col-md-12  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
  <header class="panel-heading" style="position: relative;">
    <span style="font-size: 16px;" class="panel-title">The mapping between the peaks location, the perturbed gene and the normalized signal on each cluster</span>
    <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
        title="The distance from the peak (binding site) to the TSS of the nearest gene"><i class="ti-info-alt"
          style="font-size: 70%"> </i>
      </span></sup>
    <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" -->
    <a :href="`http://43.143.155.140/scATACdb/GSE195882/KO_gene_activity/KO-KO_gene_in_genome.png`"
      :download="`id-${this.dbID}_${this.dataSet.pb_gene}_${this.dataSet.celline}_plotDistToTSS.png`"
      target="_blank" style="position: absolute;right: 2vw;"><el-button type="warning" size="small"
        circle><el-icon>
          <Download />
        </el-icon></el-button></a>
  </header>
  <div class="panel-body">
    <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt=""> -->
    <img :src="`http://43.143.155.140/scATACdb/GSE195882/KO_gene_activity/KO-KO_gene_in_genome.png`" alt="">
  </div>
</section>

</el-tab-pane>

  </el-tabs>



</template>



<script>
import request from "@/utils/request";
// import { log } from "console";
import bus from 'vue3-eventbus'
export default {
  name: "KOgene",
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