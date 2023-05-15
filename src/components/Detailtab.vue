<!-- 之前detail页面的导航栏，现已弃用 -->


<template>
    <!-- <el-menu :default-active="this.$router.path" class="el-menu-demo gtco-nav" mode="horizontal" router :ellipsis="false"> -->
    <el-menu :default-active="activeIndex" class="el-menu-demo gtco-nav" mode="horizontal" router :ellipsis="false">
      
      <div class="flex-grow"></div>
      <div class="menu-item">
        <el-menu-item index="Total">Total</el-menu-item>
        <el-menu-item index="Diff_peak">Diff_peak</el-menu-item>
        <el-menu-item index="Diff_enrichment">Diff_enrichment</el-menu-item>
        <el-menu-item index="Diff_motif">Diff_motif</el-menu-item>
        <el-menu-item index="Diff_footprint">Diff_footprint</el-menu-item>
          <el-menu-item index="Ctrl">Ctrl</el-menu-item>
          <el-menu-item index="Treat">Treat</el-menu-item>
        <!--  <el-sub-menu index="About" >
                <template #title>About</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
              </el-sub-menu> -->
      </div>
    </el-menu>
  </template>
  
  <script>
  
  export default {
    name:"detailTab",
    //父组件通过 props 向下传递数据给子组件
    props: {},
    //import引入的组件需要注入此处能使用
    components: {},
    //此处存放数据
    data() {
      return {
        activeIndex: this.$router.currentRoute._value.fullPath.split("/")[1],
      }
    },
  
    methods: {
  
  
    },
    created() {
  console.log(this.$router.currentRoute);
  console.log(this.$router.currentRoute._value.fullPath.split("/")[1]);
    },
  
  
  }
  </script>
  <style scoped>
  .flex-grow {
    flex-grow: 1;
  }
  .el-menu-demo{
    height: 6vh;
  }
  .gtco-nav{
    padding: 0;
    background-color: #932f2f !important;
  }
  .el-menu-item {
    height:6vh !important;
    color: #fff !important;
    line-height: 6vh;
    
  
  font-size: larger;
  }
  
  img {
    display: block;
  }
  
  .menu-item {
    width: 70%;
    display: flex;
    padding-right: 5%;
    justify-content: space-around;
  }
  
  
  .el-menu-item:hover {
    outline: 0 !important;
    
    background: #ff8923 !important;
  }
  
  .el-menu-item.is-active {
    background: #ff8923 !important;
  }
  </style>