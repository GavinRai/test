const fs = require('fs')
fs.writeFile('d:\\WorkSpace\\1.Test\\git\\test.txt', '大艺术家 \n', {flag: 'a', encoding: 'utf8'}, function(err) {
  if (err) { 
    console.log('error')
    throw err
  } else {
    fs.readFile('d:\\WorkSpace\\1.Test\\git\\test.txt', 'utf8', function(err, data) {
      console.log('打印文件内容：', data.toString())
      console.log('报错信息：', err)
    })
    console.log('success')
  }
})