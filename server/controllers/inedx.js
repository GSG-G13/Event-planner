const getEvents = require("../db/query/getEvent");

const getAllEvents = (req, res) => {
  getEvents()
    .then((data) => res.json(data.rows))
    .catch(console.log);
};

module.exports = getAllEvents;
