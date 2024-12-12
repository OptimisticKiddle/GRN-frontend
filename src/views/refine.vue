<template>
  <div style="width: 95%;margin: 2% auto; overflow: hidden;">
    <!-- 筛选面板 -->

    <div
      class="col-md-12"
      data-plugin-portlet
      style="margin-top: 20px;"
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <Search />
            </el-icon>&nbsp; Details
          </template>

          <div>
            <detail
              :globalID="1"
              :globalDataset="{pb_gene: '',cell_line: ''}"
              :key="''"
              :choose="false"
              :gse="params.gse"
              :gsm="params.gsm"
            ></detail>
          </div>

        </el-collapse-item>

      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import { onActivated, onMounted, ref, toRefs } from "vue";
import detail from "@/views/detail.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const activeNames = ref(['1', '2']);
const trigger = ref(false);
const { params } = toRefs(route)
console.log(params.gse)
console.log(params.gsm)
onActivated(() => {
  console.log(111)
  trigger.value = false;
})
</script>

<style>
</style>