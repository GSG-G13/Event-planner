const { updataData } = require("../../db/index");

const updateEvent = (req, res) => {
  updataData()
    .then((result) => result.json())
    .catch(console.log);
};

module.exports = updateEvent;
