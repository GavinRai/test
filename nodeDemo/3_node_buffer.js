const buf1 = Buffer.alloc(4)
buf1.fill('常来长安')
console.log('buf1 = ', buf1)

const buf2 = Buffer.from('中国李宁', 'utf8')
console.log('中国李宁16进制:', buf2)
console.log('中国李宁16进制转中文：',
  Buffer.from([0xe4, 0xb8, 0xad, 0xe5, 0x9b, 0xbd, 0xe6, 0x9d, 0x8e, 0xe5, 0xae, 0x81]).toString())
console.log('中：', buf2.slice(0, 3).toString())
  
const buf2_copy = Buffer.from(buf2)
console.log('buf2 === buf2_copy:', buf2.toString() === buf2_copy.toString())


console.log('16进制[1, 10]:',Buffer.from([1,10]))