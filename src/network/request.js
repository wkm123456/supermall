import axios from 'axios'
//如果之后axios不适用时，在这里导入其他的框架

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //如果之后axios不适用时，在这里修改代码

  //2.axios的拦截器
  //请求拦截的作用：
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  },error => {
    // console.log(error)
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  },err => {
    // console.log(err)
  })

  //3.发送真正的网络请求
  return instance(config) //这里返回的仍是Promise
  //如果之后axios不适用时，在这里返回一个new Promise,而main.js中则无需修改
}


