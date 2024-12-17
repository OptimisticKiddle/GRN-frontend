# 目录结构

> 基于 vue3+element-plus 搭建的 SPA

    ├── node_modules/                  // 依赖包
    ├── public/                      //  一些公共资源和html模板
    └── src/
        ├── assets/       // 一些静态资源 包括bootstrap样式库  css文件 fonts 图片
        ├── components/                    // 公共组件
        ├── layout/                    // 页面布局组件（路由最先打开的页面）
        ├── router/                 // 路由配置规则
        ├── store/           // vuex的store 目前没用到
        ├── utils/        // 工具函数  下载文件（download页面用到） 和 axios请求
        ├── views/                   // 页面上内容区域的不同组件
    		└── detail/              // datail tab栏下面的不同组件
    	├── App.vue             // 根组件
    	└── main.js             // 入口文件
    ├── .gitignore             // git提交代码时要忽略的文件
    ├── babel.config.js          // babel编译时的全局配置
    ├── jsconfig.json         //目录中存在此文件表示该目录是JavaScript项目的根目录。 文件本身可以选择列出属于项目的文件，要从项目中排除的文件，以及编译器选项
    ├── package.json&package-lock.json //依赖包信息，一些命令以及依赖包的依赖信息
    └── vue.config.js            // 跨域配置


## 如何使用

进入根目录 spring_vue，执行命令：

```
npm install
```

```
npm run serve
```

即可启动前台 vue 工程
