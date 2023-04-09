const connection = require('../config/connection');

const insertEvent = ({ eventName, location, data, details }) => {
    return connection.query(`INSERT INTO events(event_name,location,date,details) VALUES($1,$2,$3,$4) RETURNING *`, [eventName, location, data, details]);
}

const insertUser = ({username, password}) => {
    return connection.query(`INSERT INTO users(name,password) VALUES($1,$2) RETURNING * `, [username, password]);
}

module.exports = { insertEvent, insertUser };
