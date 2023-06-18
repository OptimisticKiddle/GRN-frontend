<template>
  <!-- 1--上面的统计 -->
  <div class="col-md-12" data-plugin-portlet style="margin-top: 2%;">
    <el-tabs type="border-card">
      <el-tab-pane label="Statistics">
        <div class="num-grid">
          <div class="num-info">
            <p> {{ statistics.perturb_datasets_num }} </p>
            {{ statistics.perturb_datasets_num }} gene purturbation ATAC-seq datasets to explore
          </div>
          <div class="num-info">
            <p> {{ statistics.perturb_gene_num }} </p>
            {{ statistics.perturb_gene_num }} genes purturbated
          </div>
          <div class="num-info">
            <p> {{ statistics.cell_line_num }} </p>
            {{ statistics.cell_line_num }} cell lines included
          </div>
          <div class="num-info">
            <p> {{ statistics.n_samples_num }} </p>
            {{ statistics.n_samples_num }} samples analysed in total
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

    <!-- 2--第二部分 Statistics of diff data -->
    <el-collapse v-model="activeNames" >
      <el-collapse-item name="1" style="margin: 1% 0;">

        <template #title>
          <el-icon>
            <Menu />
          </el-icon>&nbsp Statistics of diff data
        </template>
          <el-descriptions  title="" :column="2" :size="size" border style="padding: 0 2vw;">
            <el-descriptions-item label="diff peaks number :" width="5vw" label-align="left">
              {{diff_data.diff_peaks_num }}
            </el-descriptions-item>
            <el-descriptions-item label="diff motif number :" width="5vw" label-align="left">{{
              diff_data.diff_motif_num }}</el-descriptions-item>
            <el-descriptions-item label="diff GO enrichment number :" width="5vw" label-align="left">{{
              diff_data.diff_GO_enrich_num }}</el-descriptions-item>
            <el-descriptions-item label="diff KEGG enrichment number :" width="5vw" label-align="left">{{
              diff_data.diff_KEGG_enrich_num }}</el-descriptions-item>
            <el-descriptions-item label="diff footprint number :" width="5vw" label-align="left">{{
              diff_data.diff_footprint_num }}</el-descriptions-item>
          </el-descriptions>
      </el-collapse-item>
    
    <!-- 3--中间的两个饼图 -->
      <el-collapse-item name="2">
        <!-- 展示面板title -->
        <template #title>
          <el-icon>
            <Picture />
          </el-icon>&nbsp; High frequency data
        </template>

        <!-- 两个饼图展示 -->
        <section class="col-md-6  panel panel-tertiary" data-portlet-item>
          <header class="panel-heading" style="position: relative;">
            <span style="font-size: 16px;" class="panel-title">Frequency of perturbed genes (top 10) </span>
            <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                title="The most frequent perturbed genes in our dataset (Top 10)"><i class="ti-info-alt"
                  style="font-size: 70%"> </i>
              </span></sup>
          </header>
          <div class="panel-body">
            <piechart1 v-if="flag" :info="perturbed_gene_frequency"></piechart1>
          </div>
        </section>
        <section class="col-md-6  panel panel-tertiary" data-portlet-item>
          <header class="panel-heading" style="position: relative;">
            <span style="font-size: 16px;" class="panel-title">Frequency of cell lines (top 10)</span>
            <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                title="The most frequent cell lines in our data set (top 10)"><i class="ti-info-alt"
                  style="font-size: 70%"> </i>
              </span></sup>
          </header>
          <div class="panel-body">
            <piechart2 v-if="flag" :info="cell_line_frequency"></piechart2>
          </div>
        </section>


      </el-collapse-item>
   
    <!-- 3--下面的3个图展示 -->
    <div style="margin: 1% 0;">
      
        <el-collapse-item name="3">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <Picture />
            </el-icon>&nbsp; Diff peak site distribution 
          </template>


          <!-- 左饼图 -->

          <section class="col-md-4  panel panel-tertiary"  data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Regional distribution of diff peak</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="Regional distribution statistics of all differential peak sites in the data set"><i
                    class="ti-info-alt" style="font-size: 70%"> </i>
                </span></sup>
              
            </header>
            <div class="panel-body">
            <piechart3 v-if="flag" :info="diff_peaks_num_in_struct"></piechart3>
          </div>
          </section>
          
          <!-- 右直方图 -->
          <section class="col-md-8  panel panel-tertiary"  data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Distribution of distance between diff peak and TSS</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="The distance distribution of all differential peak sites from the nearest TSS in this dataset"><i
                    class="ti-info-alt" style="font-size: 70%"> </i>
                </span></sup>
              
            </header>
            <div class="panel-body">
            <barchart1 v-if="flag" :info="diff_peaks_dist_to_TSS_distribution"></barchart1>
          </div>
          </section>
          <!-- 下直方图 -->
          <section class="col-md-12  panel panel-tertiary"  data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Distribution of diff peaks on chromosomes</span>
              <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                  title="The distribution of all differential peak sites on different chromosomes in this dataset"><i
                    class="ti-info-alt" style="font-size: 70%"> </i>
                </span></sup>
              
            </header>
            <div class="panel-body">
            <barchart2 v-if="flag" :info="diff_peaks_num_in_chrs"></barchart2>
          </div>
          </section>
          
          

        </el-collapse-item>
      
    </div>
</el-collapse>



  </div>
  <el-backtop :bottom="20" :right="20">
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
  

  
<script>
import request from "@/utils/request";
import piechart1 from "@/components/charts/piechart1.vue"
import piechart2 from "@/components/charts/piechart2.vue"
import piechart3 from "@/components/charts/piechart3.vue"
import barchart1 from "@/components/charts/barchart1.vue"
import barchart2 from "@/components/charts/barchart2.vue"

export default {
  name: "statistics",
  components: {
    piechart1,piechart2,piechart3,barchart1,barchart2

  },
  data() {
    return {
      size: 'large',
      activeNames: ['1', '2','3'],

      statistics: {},
      diff_data: {},
      perturbed_gene_frequency: {},
      cell_line_frequency: {},
      diff_peaks_num_in_struct: {},
      diff_peaks_num_in_struct_sum: 0,
      diff_peaks_num_in_chrs: {},
      diff_peaks_dist_to_TSS_distribution: {},

      flag: false

    }

  },
  methods: {
    load() {
      request.get("/get_statistics_info").then(res => {

        this.statistics = res.statistics;
        this.diff_data = res.diff_data;
        this.perturbed_gene_frequency = res.perturbed_gene_frequency;
        this.cell_line_frequency = res.cell_line_frequency;
        this.diff_peaks_num_in_struct = res.diff_peaks_num_in_struct;
        this.diff_peaks_num_in_struct_sum = res.diff_peaks_num_in_struct
        this.diff_peaks_num_in_chrs = res.diff_peaks_num_in_chrs;
        this.diff_peaks_dist_to_TSS_distribution = res.diff_peaks_dist_to_TSS_distribution;
        this.flag = true;
      })


    },
  },
  created() {
    this.load();
  },
}


</script>
<style scoped>
.num-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;

}

.num-info {
  width: 95%;
  height: 100px;
  background-color: #1d947e;
  margin-bottom: 2vh;
  padding: 0 3vw;
  font-size: 18px;
  /* font-weight: bold; */
  color: aliceblue;
  /* line-height: 50px; */
}

.num-info p {
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  margin-top: 15px;
}
.col-md-4 {
  padding: 0 0 0 15px;
}

.statistic_diff_data {
  font-size: 16px;
}
</style>