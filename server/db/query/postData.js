const connection = require('../config/connection');

const insertEvent = ({ eventName, location, data, details }) => {
    return connection.query(`insert into events(event_name,location,date,details) values($1,$2,$3,$4) RETURNING *`, [eventName, location, data, details]);
}
const insertUser = ({username, password}) => {
    return connection.query(`insert into users(name,password) values($1,$2) RETURNING * `, [username, password]);
}

module.exports = { insertEvent, insertUser }