const express = require('express')
const routerAPI = express.Router()
const { getAllUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI } = require('../controllers/apiController')
const { postCreateCustomerAPI, postCreateArrayCustomerAPI } = require('../controllers/customerController')
    //khai báo routes
    //req (request), res(response) là 2 object trong môi trường Node.js
    //router.Method('/route',handler)


//Users
routerAPI.get('/users', getAllUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

//Customers
routerAPI.post('/customers', postCreateCustomerAPI);
routerAPI.post('/customers-many', postCreateArrayCustomerAPI);

//File
routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMultipleFilesAPI);
module.exports = routerAPI; //export default