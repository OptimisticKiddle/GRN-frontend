<template>
  <nav>
    <!-- 头部导航 -->
    <Header></Header>

  </nav>
  <!-- 内容区域 -->
  <!-- <keep-alive >
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  <!-- 需要缓存的组件 -->
  <keep-alive include="statistics search">
    <router-view></router-view>
  </keep-alive>

</template>
  
<style></style>
  
<script>
import Header from "@/components/Header.vue";
export default {
  name: "Layout",
  components: {
    Header
  }
}


</script>
  