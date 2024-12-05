<template>
  <!-- 主体 -->
  <div>

    <el-tabs type="border-card">
      <el-tab-pane label="QC">
        <QC :dbID="globalID"></QC>
      </el-tab-pane>
      <el-tab-pane label="Dim reduction & clustering">
        <Dim_reduction_clustering
          :dbID="globalID"
          :globalDataset="globalDataset"
        ></Dim_reduction_clustering>
      </el-tab-pane>
      <!-- <el-tab-pane label="Gene activity">
        <Gene_activity
          :dbID="globalID"
          :globalDataset="globalDataset"
        ></Gene_activity>
      </el-tab-pane> -->
      <el-tab-pane label="Perturbed gene activity">
        <KO_gene_activity
          :dbID="globalID"
          :globalDataset="globalDataset"
        ></KO_gene_activity>
      </el-tab-pane>

      <!-- <el-tab-pane label="Diff Motif">
      <Diff_motif :dbID="globalID" :globalDataset="globalDataset"></Diff_motif>
    </el-tab-pane>

    <el-tab-pane label="Ctrl Peaks">
      <Ctrl :dbID="globalID" :globalDataset="globalDataset"></Ctrl>
    </el-tab-pane>
    <el-tab-pane label="Treat Peaks">
      <Treat :dbID="globalID" :globalDataset="globalDataset"></Treat>
    </el-tab-pane> -->
    </el-tabs>

  </div>

</template>

<style></style>

<script>

import QC from '@/views/detail/QC.vue'
import KO_gene_activity from '@/views/detail/KO_gene_activity.vue'
import Gene_activity from '@/views/detail/Gene_activity.vue'
// import Diff_motif from '@/views/detail/Diff_motif.vue'
import Dim_reduction_clustering from '@/views/detail/Dim_reduction_clustering.vue'
// import Ctrl from '@/views/detail/Ctrl.vue'
// import Treat from '@/views/detail/Treat.vue'
// import request from "@/utils/request";

import bus from 'vue3-eventbus'
export default {
  name: "detail",
  components: {
    QC, KO_gene_activity, Gene_activity, Dim_reduction_clustering

  },
  props: {
    globalID: Number,
    globalDataset: Object,
    choose: Boolean,
  },
  data () {
    return {
      dbID: 0,

    }
  },



}

</script>