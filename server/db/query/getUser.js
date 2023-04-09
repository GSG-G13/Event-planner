const connection = require('../config/connection');

const getUser = (username) => {
    return connection.query('SELECT * FROM users WHERE name = ($1)',[username])
}

module.exports = {getUser}

