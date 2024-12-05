<template>
  <!-- <div style="width: 95%;margin: 2% auto; overflow: hidden;">

    <div
      class="col-md-12"
      data-plugin-portlet
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template #title>
            <el-icon>
              <Search />
            </el-icon>&nbsp; Refine GRN
          </template>

        </el-collapse-item>
      </el-collapse>
    </div>
  </div> -->

  <div style="width: 95%;margin: 2% auto; overflow: hidden;">
    <!-- 筛选面板 -->

    <div
      class="col-md-12"
      data-plugin-portlet
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <Search />
            </el-icon>&nbsp; Visualization
          </template>
          <!-- <div style="margin-top: 20px; margin-bottom: 20px; display: flex; flex-direction: row-reverse;">
            <el-button
              type="primary"
              style="background-color: #027750;"
            >Back</el-button>
          </div> -->
          <detail
            :globalID="1"
            :globalDataset="{pb_gene: '',cell_line: ''}"
            :key="''"
            :choose="true"
          ></detail>

        </el-collapse-item>
      </el-collapse>
    </div>
  </div>

</template>

<script setup>
import detail from "@/views/detail.vue";
import { ref } from "vue";
const activeNames = ref(["1", "2"]);

</script>

<style>
</style>