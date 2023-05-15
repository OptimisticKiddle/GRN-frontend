import axios from 'axios'
const downloadFile = (url, filename) =>
  axios
    .get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      const blob = new Blob([res.data]) // 构造一个blob对象来处理数据，并设置文件类型
      if (window.navigator.msSaveOrOpenBlob) {
        // 兼容IE10
        navigator.msSaveBlob(blob, filename)
      } else {
        const href = URL.createObjectURL(blob) // 创建新的URL表示指定的blob对象
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = href // 指定下载链接
        a.download = filename // 指定下载文件名
        a.click()
        URL.revokeObjectURL(a.href) // 释放URL对象
      }
    })
export default downloadFile