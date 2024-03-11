const Customer = require('../models/customer');

const createCustomerService = async(customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result

    } catch (error) {
        console.log(error)
        return null;
    }
}

const createArrayCustomerService = async(arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result

    } catch (error) {
        console.log("Check error", error)
        return null;
    }
}

const getAllCustomerService = async() => {
    try {
        let results = await Customer.find({});
        return results;
    } catch (error) {
        console.log("error >>", error)
        return null;
    }
}

const putUpdateCustomerService = async(id, name, email, phone, address) => {
    try {
        let result = await Customer.updateOne({ _id: id }, { name, email, address, phone });
        return result;
    } catch (error) {
        console.log("error>>>", error)
        return null;
    }
}

const deleteCustomerService = async(id) => {
    try {
        let result = await Customer.deleteById(id);
        return result;
    } catch (error) {
        console.log("error>>>", error)
        return null;
    }
}

const deleteArrayCustomerService = async(arrIds) => {
    try {
        let result = await Customer.delete({ _id: { $in: arrIds } });
        return result;
    } catch (error) {
        console.log("Error >>>", error);
        return null;
    }
}

module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerService,
    putUpdateCustomerService,
    deleteCustomerService,
    deleteArrayCustomerService
}