const mongoose = require('mongoose'); //import mongoose

//Định dạng hình thù data
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
}, { timestamps: true }); //createdAt, updatedAt

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;