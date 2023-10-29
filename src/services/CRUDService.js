const connection = require('../config/database')

const getAllUsers = async() => {
    const [results, fields] = await connection.query('Select * from Users u');
    return results;
    console.log('>>> Check results')
}

module.exports = {
    getAllUsers,
}