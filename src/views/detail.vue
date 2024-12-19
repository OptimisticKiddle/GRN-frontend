<template>
  <!-- 主体 -->
  <div>

    <el-tabs type="border-card">
      <el-tab-pane label="Gene regulatory network">
        <Gene_network
          :gse="gse"
          :gsm="gsm"
          :organ="organ"
          :tissue="tissue"
          :celltype="celltype"
        ></Gene_network>
      </el-tab-pane>
      <el-tab-pane label="Dim reduction & clustering">
        <Dim_reduction_clustering
          :gse="gse"
          :gsm="gsm"
        ></Dim_reduction_clustering>
      </el-tab-pane>

      <el-tab-pane label="QC">
        <QC
          :gse="gse"
          :gsm="gsm"
        ></QC>
      </el-tab-pane>

    </el-tabs>

  </div>

</template>

<style></style>

<script>

import QC from '@/views/detail/QC.vue'

// import Diff_motif from '@/views/detail/Diff_motif.vue'
import Dim_reduction_clustering from '@/views/detail/Dim_reduction_clustering.vue'
import Gene_network from '@/views/detail/Gene_network.vue'



export default {
  name: "detail",
  components: {
    QC, Dim_reduction_clustering, Gene_network

  },
  props: {
    globalID: Number,
    globalDataset: Object,
    choose: Boolean,
    gse: String,
    gsm: String,
    organ: String,
    tissue: String,
    celltype: String,
  },
  data () {
    return {
      dbID: 0,

    }
  },



}

</script>