const User = require('../models/user.js');


const getUsersAPI = async(req, res) => {
    // //process data
    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

module.exports = {
    getUsersAPI
}