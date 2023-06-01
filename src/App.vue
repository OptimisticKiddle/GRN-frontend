<template>
    <!-- 需要缓存的组件 -->
  <keep-alive include="statistics">
    <router-view></router-view>
  </keep-alive>

</template>

<style>


</style>

<script>

export default{
  name:"App",
 
}


</script>
