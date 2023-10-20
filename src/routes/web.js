const express = require('express')
const { getHomepage, getTest } = require('../controllers/homeController')
const router = express.Router()


//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
//router.Method('/route',handler)
router.get('/', getHomepage);
router.get('/test', getTest);

module.exports = router; //export default