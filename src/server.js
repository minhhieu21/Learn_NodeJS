const express = require('express') //import express
const app = express() // tạo express application
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

// config dotenv
require('dotenv').config()

const port = process.env.PORT || 8081 // init port
const hostname = process.env.HOST_NAME // init port

// config templat engine and static file
configViewEngine(app);

// khai báo routes
app.use('/', webRoutes);

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})