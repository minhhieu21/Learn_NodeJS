const connection = require('../config/database')

const getAllUsers = async() => {
    const [results, fields] = await connection.query('Select * from Users u');
    return results;
    console.log('>>> Check results')
}

const getUserById = async(userId) => {
    let [results, fields] = await connection.query('Select * from Users u where id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    console.log('User:', results);
    return user;
}

const updateUserById = async(email, name, city, age, userId) => {
    //query update
    let queryUpdate = `UPDATE Users set  email = ? , name = ?, city = ?, age = ? Where id = ?`

    // use async, await
    const [results, fields, err] = await connection.query(queryUpdate, [email, name, city, age, userId]);
    if (err) {
        throw err;
    } else {
        console.log('Update user success !')
    }
}

const createUser = async(email, name, city, age) => {
    //query insert
    let queryCreate = `INSERT INTO Users (email, name, city, age) VALUES (?,?,?,?)`

    // use async, await
    const [results, fields, err] = await connection.query(queryCreate, [email, name, city, age]);
    if (err) {
        throw err;
    } else {
        console.log('Insert user success !')
    }

}


module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    createUser,
}