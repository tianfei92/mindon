// node 后端服务器

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res, next) => {
    next()
})
// 后端api路由
app.get('/admin', (req, res, next) => {
    res.redirect('https://www.baidu.com/');
})

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');