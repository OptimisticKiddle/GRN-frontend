import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import * as ElIcon  from '@element-plus/icons-vue'

import eventBus from 'vue3-eventbus'

// import 'dayjs/locale/zh-cn'
// import locale from 'element-plus/lib/locale/lang/zh-cn'

//import * as echarts from 'echarts'


import '@/assets/css/news.css'
import '@/assets/css/overview.css'
import '@/assets/css/animate.css'
// import '@/assets/css/bootstrap.css'
import '@/assets/css/icomoon.css'
import '@/assets/css/themify-icons.css'
import '@/assets/bootstrap/css/bootstrap.min.css'
import '@/assets/css/theme.css'
import '@/assets/css/style.css'
import '@/assets/css/modify.css'

const app = createApp(App)
    .use(store)
    .use(router)
   .use(ElementPlus)
  //  .use(eventBus)
Object.keys(ElIcon).forEach((key) => {
    app.component(key, ElIcon[key])
    })  
// 先全局引入所有 svg图标 再挂载app  
app.mount('#app')

// 解决报错 ResizeObserver loop limit exceeded
const debounce = (fn, delay) => {
    let timer = null;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  }
  
  const _ResizeObserver = window.ResizeObserver;
  window.ResizeObserver = class ResizeObserver extends _ResizeObserver{
    constructor(callback) {
      callback = debounce(callback, 16);
      super(callback);
    }
  }
  

//app.echarts = echarts
