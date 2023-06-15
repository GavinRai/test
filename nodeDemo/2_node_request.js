const queryString = require('querystring')
const str = queryString.stringify({ name: 'gavin', age: 28 })
// console.log(str) // name=gavin&age=28
// console.log(JSON.stringify({ name: 'gavin', age: 28 })) // {"name":"gavin","age":28}

const http = require('http')
const options = { hostname: 'www.baidu.com', method: 'get', port: 80 }

/**-------server--------- */
const req = http.request(options, function(res) {
  // res.on('data', function(chunk) {
  //   console.log(chunk.toString())
  // })
})

console.log('判断构造函数是否等于http.ClientRequest：', req instanceof http.ClientRequest)

req.on("error", function (err) {
  console.log("出错了")
  console.log(err.message)
})

req.on("response", function (res) {
  console.log(res.statusCode)
  res.on('data', function (chunk) { 
    // console.log(chunk.toString()) // 等同于12行
  })
})

req.end()

/**-------server简写--------- */
// http.get(options, function (res) {
//   res.on('data', function(chunk) {
//     console.log(chunk.toString())
//   })
// })

/**
 * node中的http模块
 * 一.http服务端
 * 1.服务端使用
 * 2.请求对象（incomingMessage类的实例）和响应对象（serverResponse类的实例）
 * 二.http客户端
 * 1.客户端使用（Request和get方法）
 * 2.请求对象（clientRequest类的实例）和响应对象（incomingMessage类的实例）
 */
