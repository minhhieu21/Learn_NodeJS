const express = require('express')
const router = express.Router()


//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
router.get('/', (req, res) => {
    res.send('Hello World & nodemon')
})

router.get('/test', (req, res) => {
    res.render('index.ejs')
})

module.exports = router;