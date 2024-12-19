<template>
  <nav>
    <!-- 头部导航 -->
    <Header></Header>

  </nav>
  <!-- 内容区域 -->
  <router-view v-slot="{ Component }">

    <component :is="Component" />
  </router-view>

</template>
  
<style>
input[type='file'] {
  display: none !important;
}
.el-loading-spinner .el-loading-text {
  display: flex !important;
  justify-content: center !important;
}
</style>
  
<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
}


</script>
  