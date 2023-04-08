const connection = require('../config/connection');

const getUser = (username) => {
    const sql = {
        text: "select * from users where name = ($1)",
        values: [username]
    }
    return connection.query(sql)
}

module.exports = {getUser}

