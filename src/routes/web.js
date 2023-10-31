const express = require('express')
const { getHomepage, getTest, getCreatePage, getUpdatePage, getDeleteUserPage, postCreateUser, postUpdateUser, postDeleteUser } = require('../controllers/homeController')
const router = express.Router()


//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
//router.Method('/route',handler)
router.get('/', getHomepage);
router.get('/test', getTest);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);
router.get('/delete-user/:id', getDeleteUserPage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user', postDeleteUser);

module.exports = router; //export default