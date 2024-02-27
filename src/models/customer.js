const mongoose = require('mongoose'); //import mongoose
const mongoose_delete = require('mongoose-delete');

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

// Override all methods
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;