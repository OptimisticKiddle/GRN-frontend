

// 跨域配置
module.exports = {
    devServer: {                //记住，别写错了devServer//设置本地默认端口  选填
        port: 8080,
        proxy: {                 //设置代理，必须填
            '': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
           
                target: process.env.VUE_APP_BASE_URL,     //代理的目标地址

                changeOrigin: true,              //是否设置同源，输入是的
                pathRewrite: {                   //路径重写
                                      //选择忽略拦截器里面的单词
                }
            }
        }
    },
    publicPath: './',
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].title= 'GRN-web'
            return args
          })
      }
}
