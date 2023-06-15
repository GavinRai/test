const template = require('art-template')
const path = require('path')
const htmlObj = template(path.join(__dirname, "/views/rank.html"), {
  user: {
    name: 'jack',
    age: 20
  },
  students: [
    { name: '张三', age: 18 },
    { name: '李四', age: 18 }
  ]
})

console.log(htmlObj)