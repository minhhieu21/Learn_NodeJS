const ejs = require('ejs');
const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, createUser, deleteUserById } = require('../services/CRUDService.js')

const User = require('../models/user.js');



const getHomepage = async(req, res) => {
    // //process data
    let results = await User.find({});
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
    let user = await User.findById(userId).exec();
    res.render('editUser.ejs', { userEdit: user }) // x <- y
}
const postCreateUser = async(req, res) => {
    let email = req.body.email;
    let name = req.body.fullname;
    let city = req.body.city;
    let age = req.body.age;
    console.log('>>> email :', email, ',fullname :', name, ',city :', city, ',age : ', age);

    await User.create({
        email,
        name,
        city,
        age
    });

    res.redirect('/')
}
const getDeleteUserPage = async(req, res) => {
    const userId = req.params.id;
    console.log('User Id:', userId);

    let user = await User.findById(userId).exec();
    res.render('deleteUser.ejs', { userEdit: user }) // x <- y
}

const postUpdateUser = async(req, res) => {
    let email = req.body.email;
    let name = req.body.fullname;
    let city = req.body.city;
    let age = req.body.age;
    let userId = req.body.userId;

    console.log('>>> email :', email, ',fullname :', name, ',city :', city, ',age : ', age, 'userId : ', userId);

    await User.updateOne({ _id: userId }, { name: name, email: email, city: city, age: age });

    // console.log('>>> Check results', results)
    res.redirect('/')

}

const postDeleteUser = async(req, res) => {
    const id = req.body.userId;
    let result = await User.deleteOne({
        _id: id
    })

    console.log(">>> result", result);
    res.redirect('/')
}

module.exports = {
    getHomepage,
    getTest,
    getCreatePage,
    getUpdatePage,
    postCreateUser,
    postUpdateUser,
    getDeleteUserPage,
    postDeleteUser
}