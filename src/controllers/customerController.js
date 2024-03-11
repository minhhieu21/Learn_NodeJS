const { uploadSingleFile } = require('../services/fileService')
const { createCustomerService, createArrayCustomerService, getAllCustomerService, putUpdateCustomerService, deleteCustomerService, deleteArrayCustomerService } = require('../services/customerService');
const Customer = require('../models/customer');


module.exports = {
    postCreateCustomerAPI: async(req, res) => {

        let { name, address, phone, email, description } = req.body;
        let imageUrl = ""

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },

    postCreateArrayCustomerAPI: async(req, res) => {
        let customers = await createArrayCustomerService(req.body.customers)
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers
            })
        }
    },

    getAllCustomerAPI: async(req, res) => {
        let result = await getAllCustomerService();
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    putUpdateCustomerAPI: async(req, res) => {
        let { id, name, email, phone, address } = req.body;
        let result = await putUpdateCustomerService(id, name, email, phone, address);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteCustomerAPI: async(req, res) => {
        let id = req.body.id;
        let result = await deleteCustomerService(id);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteManyCustomerAPI: async(req, res) => {
        let ids = req.body.customersId;
        console.log(">> Check ids:", ids);
        let result = await deleteArrayCustomerService(ids);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}