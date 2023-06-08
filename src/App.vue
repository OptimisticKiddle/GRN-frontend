<template>
  <nav>
    <!-- 头部导航 -->
    <Header></Header>

  </nav>
  <!-- 内容区域 -->
  <!-- 缓存页面组件 -->
  <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

</template>
  
<style></style>
  
<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header
  }
}


</script>
  