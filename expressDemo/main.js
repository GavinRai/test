const express = require('express')
const app = express()
const static = express.static('static')
const bodyParser = require('body-parser')

app.use(static) // 托管静态资源，默认当前文件根目录/static下
app.use(bodyParser.urlencoded({ // bodyParser：获取post请求的数据，转为对象
  extended: true
}))

app.use('/api', require('./route')) // 路由

app.listen(3000, function (param) {
  console.log('服务器已启动')
  // console.log(param)
})