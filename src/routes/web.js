const express = require('express')
const { getHomepage, getTest, getCreatePage, getUpdatePage, postCreateUser } = require('../controllers/homeController')
const router = express.Router()


//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
//router.Method('/route',handler)
router.get('/', getHomepage);
router.get('/test', getTest);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);
router.post('/create-user', postCreateUser);

module.exports = router; //export default