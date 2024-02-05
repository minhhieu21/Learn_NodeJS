const express = require('express')
const routerAPI = express.Router()
const { getUsersAPI } = require('../controllers/apiController')

//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
//router.Method('/route',handler)
routerAPI.get('/', (req, res) => {
    res.send("Hello world with API")
});

routerAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data: "Hello world with abc"
    })
});

routerAPI.get('/users', getUsersAPI);
module.exports = routerAPI; //export default