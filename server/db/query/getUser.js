const connection = require('../config/connection');

const getUserFromDataBase = (username) => {
    const sql = {
        text: "select * from users where name = ($1)",
        values: [username]
    }
    return connection.query(sql)
}

module.exports = {getUserFromDataBase}

