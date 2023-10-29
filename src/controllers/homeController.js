const { name } = require('ejs');
const connection = require('../config/database');

const getHomepage = (req, res) => {
    // //process data
    // //call model
    // let users = [];

    // connection.query(
    //     'SELECT * FROM Users u',
    //     function(err, results, fields) {
    //         users = results;
    //         console.log(">>>>result home page = ", results); // results contains rows returned by server
    //         // console.log(">>>>fields = ", fields); // fields contains extra meta data about results, if available


    //         // console.log(">>>>check users = ", users); 
    //         res.send(JSON.stringify(users))
    //     }
    // );

    return res.render('home.ejs')

}
const getTest = (req, res) => {
    res.render('index.ejs')
}
const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.fullname;
    let city = req.body.city;
    let age = req.body.age;
    let queryCreate = `INSERT INTO Users (email, name, city, age) VALUES (?,?,?,?)`

    console.log('>>> email :', email, ',fullname :', name, ',city :', city, ',age : ', age)
    connection.query(queryCreate, [email, name, city, age], function(err, result) {
        if (err) {
            throw err;
        } else {
            console.log('Insert user success !')
        }
    });
    res.send('Insert User Success !')
}

module.exports = {
    getHomepage,
    getTest,
    postCreateUser
}