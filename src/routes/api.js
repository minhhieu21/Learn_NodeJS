const express = require('express')
const routerAPI = express.Router()
const { getAllUsersAPI, postCreateUserAPI } = require('../controllers/apiController')

//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
//router.Method('/route',handler)

routerAPI.get('/users', getAllUsersAPI);
routerAPI.post('/users', postCreateUserAPI);

module.exports = routerAPI; //export default