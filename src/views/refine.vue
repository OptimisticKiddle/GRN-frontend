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
              :gse="query.gse"
              :gsm="query.gsm"
              :organ="query.organ"
              :tissue="query.tissue"
              :celltype="query.celltype"
            ></detail>
          </div>

        </el-collapse-item>

      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import detail from "@/views/detail.vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { useStore } from 'vuex' // 引入useStore 方法
const store = useStore()
const route = useRoute();
const activeNames = ref(['1', '2']);

const { query } = toRefs(route)
onBeforeRouteLeave((to, from) => {
  console.log(store.state.loading)
  if (store.state.loading) {
    const answer = window.confirm(
      'Do you really want to leave? you have unsaved changes!'
    )
    // 取消导航并停留在同一页面上
    if (!answer) return false
  }

})

console.log('inininin')


</script>

<style>
</style>