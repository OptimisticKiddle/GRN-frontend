<!-- 所有页面的头部导航栏 -->


<template>
  <el-menu
    :default-active="route.path"
    class="el-menu-demo gtco-nav"
    mode="horizontal"
    @select="handleSelect"
    :ellipsis="false"
  >
    <div style="margin:10px 10% 0 ">
      <a href="Home"><img
          src="new_logo.png"
          width="210"
        ></a>
    </div>
    <div class="flex-grow"></div>
    <div class="menu-item">
      <el-menu-item index="Home"><el-icon>
          <HomeFilled />
        </el-icon>Home</el-menu-item>
      <!-- <el-menu-item index="Statistics"><el-icon>
          <PieChart />
        </el-icon>Statistics</el-menu-item> -->
      <el-menu-item index="Search"><el-icon>
          <Search />
        </el-icon>Search</el-menu-item>
      <el-menu-item index="Download"><el-icon>
          <Download />
        </el-icon>Download</el-menu-item>
      <el-menu-item index="Tutorial"><el-icon>
          <Memo />
        </el-icon>Tutorial</el-menu-item>
      <!-- <el-menu-item index="Help"><el-icon>
          <QuestionFilled />
        </el-icon>Help</el-menu-item> -->
      <el-menu-item index="About"><el-icon>
          <Avatar />
        </el-icon>About</el-menu-item>

    </div>
  </el-menu>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
console.log(route.path, 123)
const handleSelect = (path) => {
  router.push(`/${path}`)
}

// export default {
//   data () {
//     return {
//       activeIndex: '',
//     }
//   },
//   methods: {
//     handleSelect (keyPath) {
//       sessionStorage.setItem('keyPath', keyPath);
//     }
//   },
//   mounted () {
//     this.activeIndex = sessionStorage.getItem('keyPath') || 'Home';  // 保证刷新后依然保持选中
//   },


// }
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}

.el-menu-item {
  font-size: medium;
  font-weight: bold;
  color: #fff !important;
  padding: 0 10px;
  /* font-size: larger; */
  /* 文字不能被選中 */
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

img {
  display: block;
}

.menu-item {
  width: 70%;
  display: flex;
  padding-right: 10%;
  justify-content: space-around;
}

.el-menu-item:hover {
  outline: 0 !important;
  color: #ff8923 !important;
  background: none !important;
}

.el-menu-item.is-active {
  color: #ff8923 !important;
  background: none !important;
}
</style>