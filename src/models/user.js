const mongoose = require('mongoose'); //import mongoose

//Định dạng hình thù data
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
    age: Number,
});

const User = mongoose.model('user', userSchema);

module.exports = User;