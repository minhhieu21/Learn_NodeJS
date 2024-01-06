const express = require('express') //import express
const app = express() // tạo express application
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// config dotenv
require('dotenv').config()

// // simple query
// connection.query(
//     'SELECT * FROM Users u',
//     function(err, results, fields) {
//         console.log(">>>>result = ", results); // results contains rows returned by server
//         // console.log(">>>>fields = ", fields); // fields contains extra meta data about results, if available
//     }
// );

const port = process.env.PORT || 8081 // init port
const hostname = process.env.HOST_NAME // init port

// config templat engine and static file
configViewEngine(app);

// khai báo routes
app.use('/', webRoutes);

//test connection
connection();

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})