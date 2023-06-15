const path = require('path')
// 格式化路径
const str = path.normalize('/foo/bar//baz/asdf/..')
console.log('格式化路径：', str) //输出"\foo\bar\baz"，“/..”表示上级目录

// 路径拼接
console.log('路径拼接：', path.join('\\foo', 'bar', 'baz', '..')) //输出“\foo\bar”

// 路径巡航
const str_path = path.resolve('foo/bar', '/temp/file/', '..', 'a/../subfile')
console.log('路径巡航：', str_path) //输出“D:\temp\subfile”

console.log('foo/bar/baz'.split(path.posix.sep)) // 等同于 'foo/bar/baz'.split('/')

// 获取文件（叶子节点）所在目录
console.log('获取文件（叶子节点）所在目录：', path.dirname('foo/bar/text.txt'))

// 获取文件（叶子节点）名称
console.log('获取文件（叶子节点）名称：', path.basename('foo/bar/text.txt', '.txt')) // 第二个参数，排除文件后缀名

// 全局变量
console.log(__dirname) // 当前文件夹名称 D:\WorkSpace\1.Test\git 
console.log(__filename) // 当前文件名称（包含路径） D:\WorkSpace\1.Test\git\6_node_path.js