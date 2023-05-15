<template>
    <nav>
      <!-- 头部导航 -->
      <Header></Header>
      
    </nav>
    <!-- 内容区域 -->
    <router-view/>
  </template>
  
  <style>
  
  
  </style>
  
  <script>
  import Header from "@/components/Header.vue";
  export default{
    name:"Layout",
    components:{
      Header
    }
  }
  
  
  </script>
  