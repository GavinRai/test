const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  // console.log(req.data)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('hello world!')
  res.end()
})

server.listen(port, hostname, () => { 
  console.log('服务器已启动')
}) 