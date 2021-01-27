import axios from 'axios'

//创建一个axios的对象
const instance = axios.create({
  baseURL: 'http://172.16.40.174:8086', //baseURL会在发送请求的时候拼接在url参数前面
  timeout: 5000,
  withCredentials: true,
})

//请求拦截 ,所有的网络请求都会先走这个方法
// instance.interceptors.request.use(
//   function (config) {
//     // if (localStorage.getItem('token')) {// && localStorage.getItem('adminEmail')) {
//     //   config.headers.token = localStorage.getItem('token');
//     //   // config.headers.adminEmail = localStorage.getItem('adminEmail')
//     // }
//     return config
//   },
//   function (err) {
//     return Promise.reject(err)
//   }
// )
//响应拦截
// instance.interceptors.response.use(
//   function (response) {
//     let url = response.config.url;
//     if (response.config.url === '/admin/manager/login' || response.config.url === '/admin/manager/logout') {
//       return response
//     } else if (url.indexOf("/admin") === 0) {//拦截admin头的请求
//       if (response.data.token_code && response.data.token_code === 201) {//是登录状态
//         // localStorage.setItem('token', response.data.token)
//         return response
//       } else {
//         window.location.pathname = '/login'
//         alert('您未登录，请先登录')
//         return false
//       }
//     }
//     return response
//   },
//   function (err) {
//     return Promise.reject(err)
//   }
// )

export function get (url, params) {
  return instance.get(url, {
    params
  })
}

export function post (url, data) {
  return instance.post(url, data)

}
