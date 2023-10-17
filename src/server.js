const express = require('express') //import express
const app = express() // tạo express application
const path = require('path')

// config dotenv
require('dotenv').config()

const port = process.env.PORT || 8081 // init port
const hostname = process.env.HOST_NAME // init port


// config static files
app.use(express.static(path.join(__dirname, 'public')));

// config templat engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
app.get('/', (req, res) => {
    res.send('Hello World & nodemon')
})

app.get('/test', (req, res) => {
    res.render('index.ejs')
})

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})