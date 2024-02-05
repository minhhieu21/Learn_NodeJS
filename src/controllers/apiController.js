const User = require('../models/user.js');

//Lấy danh sách user
const getAllUsersAPI = async(req, res) => {
    // //process data
    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}


//Tạo mới user
const postCreateUserAPI = async(req, res) => {
    let email = req.body.email;
    let name = req.body.fullname;
    let city = req.body.city;
    let age = req.body.age;
    console.log('>>> email :', email, ',fullname :', name, ',city :', city, ',age : ', age);

    let user = await User.create({
        email,
        name,
        city,
        age
    });

    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

//Cập nhật user 
const putUpdateUserAPI = async(req, res) => {
    let email = req.body.email;
    let name = req.body.fullname;
    let city = req.body.city;
    let age = req.body.age;
    let userId = req.body.userId;

    console.log('>>> email :', email, ',fullname :', name, ',city :', city, ',age : ', age, 'userId : ', userId);

    let user = await User.updateOne({ _id: userId }, { name: name, email: email, city: city, age: age });

    return res.status(200).json({
        errorCode: 0,
        data: user
    })

}

module.exports = {
    getAllUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI
}