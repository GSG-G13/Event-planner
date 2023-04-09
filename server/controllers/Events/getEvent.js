const {getEvents} = require('../../db')

const getAllEvents = (req, res, next) => {
  getEvents()
    .then(({rows}) => res.json(rows))
    .catch((error) => {
      next(error)
    });
};

module.exports = { getAllEvents };
