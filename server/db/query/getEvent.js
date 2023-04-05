const connection = require("../config/connection");

const getEvents = () => {
  const sql = {
    text: "SELECT * FROM events;",
  };
  return connection.query(sql);
};

module.exports = getEvents;
