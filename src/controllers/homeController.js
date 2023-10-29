const ejs = require('ejs');
const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService.js')

const getHomepage = async(req, res) => {
    // //process data
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })

}
const getTest = async(req, res) => {
    // res.render('index.ejs')
    const [results, fields] = await connection.query('Select * from Users u')
    res.send(results)
}

const getCreatePage = (req, res) => {
    res.render('createUser.ejs')
}
const getUpdatePage = async(req, res) => {
    const userId = req.params.id;
    console.log('User Id:', userId);

    let [results, fields] = await connection.query('Select * from Users u where id = ?', [userId]);
    console.log('User:', results);

    let user = results && results.length > 0 ? results[0] : {};

    res.render('editUser.ejs', { userEdit: user })
}
const postCreateUser = async(req, res) => {
    let email = req.body.email;
    let name = req.body.fullname;
    let city = req.body.city;
    let age = req.body.age;
    let queryCreate = `INSERT INTO Users (email, name, city, age) VALUES (?,?,?,?)`

    console.log('>>> email :', email, ',fullname :', name, ',city :', city, ',age : ', age);

    // use async, await
    const [results, fields, err] = await connection.query(queryCreate, [email, name, city, age]);
    if (err) {
        throw err;
    } else {
        console.log('Insert user success !')
    }

    console.log('>>> Check results', results)
    res.send('Insert User Success !')

    // not user asyc await
    // connection.query(queryCreate, [email, name, city, age], function(err, result) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         console.log('Insert user success !')
    //     }
    // });
}

module.exports = {
    getHomepage,
    getTest,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}