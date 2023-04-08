const {getEvents} = require('../../db/index')

const getAllEvents = (req, res) => {
  getEvents()
    .then((data) => res.json(data.rows))
    .catch(console.log);
};

module.exports = {getAllEvents};
