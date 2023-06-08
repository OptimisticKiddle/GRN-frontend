<template>
  <!-- 主体 -->
  <div>
    
    <el-tabs type="border-card">
    <el-tab-pane label="Overview">
      <Total :dbID="globalID"></Total>
    </el-tab-pane>
    <el-tab-pane label="Diff Peaks">
      <Diff_peak :dbID="globalID" :globalDataset="globalDataset"></Diff_peak>
    </el-tab-pane>
    <el-tab-pane label="Diff Enrichment">
      <Diff_enrichment :dbID="globalID" :globalDataset="globalDataset"></Diff_enrichment>
    </el-tab-pane>
    <el-tab-pane label="Diff Motif">
      <Diff_motif :dbID="globalID" :globalDataset="globalDataset"></Diff_motif>
    </el-tab-pane>
    <el-tab-pane label="Diff Footprint">
      <Diff_footprint :dbID="globalID" :globalDataset="globalDataset"></Diff_footprint>
    </el-tab-pane>
    <el-tab-pane label="Ctrl Peaks">
      <Ctrl :dbID="globalID" :globalDataset="globalDataset"></Ctrl>
    </el-tab-pane>
    <el-tab-pane label="Treat Peaks">
      <Treat :dbID="globalID" :globalDataset="globalDataset"></Treat>
    </el-tab-pane>
  </el-tabs>

  </div>
  
</template>

<style></style>

<script>

import Total from '@/views/detail/Total.vue'
import Diff_peak from '@/views/detail/Diff_peak.vue'
import Diff_enrichment from '@/views/detail/Diff_enrichment.vue'
import Diff_motif from '@/views/detail/Diff_motif.vue'
import Diff_footprint from '@/views/detail/Diff_footprint.vue'
import Ctrl from '@/views/detail/Ctrl.vue'
import Treat from '@/views/detail/Treat.vue'
import request from "@/utils/request";

import bus from 'vue3-eventbus'
export default {
  name: "detail",
  components: {
    Total,Diff_peak,Diff_enrichment,Diff_motif,Diff_footprint,Ctrl,Treat

  },
 props: {
  globalID:Number,
  globalDataset: Object
 },
 data () {
      return {
        dbID:0,
        
      }
    },
 
  
    
}

</script>