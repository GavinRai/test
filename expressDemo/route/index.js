const express = require('express')
const router = express.Router()
const data = require('../data/data.js')
const parseUrl = require('url')
const queryString = require('querystring')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
})
connection.connect()

router.get('/main', function (req, res) {
  // http://localhost:3000/api/main?name=GavinRai
  // console.log('req.url = ', req.url) // '/main?name=GavinRai'
  const query = parseUrl.parse(req.url).query
  const queryObj = queryString.parse(query)
  // console.log('queryObj.name = ', queryObj.name) // 'GavinRai'
  res.send('hello express')
})


router.post('/user', function (req, res) { 
  // res.send(data)
  // console.log('req.body = ', req.body)
  
  // connection.query('select * from sales', function(err, rows, fields) { // 回调函数都是异步
  //   if (err) throw err
  //   // console.log(rows)
  //   res.send(rows)
  // })
  // connection.end()

  sqlQuery('select * from sales', (data) => { 
    res.send(data)
  })
})

function sqlQuery (sql, callBack) { 
  connection.query(sql, function(err, data) {
    if (err) throw err
    callBack(data)
  })
}

module.exports = router