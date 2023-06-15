const url = require('url')
const url_baidu = url.parse('https://www.baidu.com:8080/?name=jack')
console.log('获取url信息：', url_baidu)

console.log('生成URL链接：',
  url.format({
    protocol: 'https',
    host: '127.0.0.1:8080',
    search: 'news=今日头条'
  }))

console.log('拼接url：', url.resolve('https://www.baidu.com', 'keywords=今日头条'))