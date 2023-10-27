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
    console.log('>>> req.body', req.body)
    res.send('Create new User')
}

module.exports = {
    getHomepage,
    getTest,
    postCreateUser
}