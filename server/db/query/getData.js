const connection = require("../config/connection");

const getEvents = () => {
  return connection.query('SELECT * FROM events;')
};

module.exports = {getEvents};

