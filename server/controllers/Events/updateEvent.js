const { updataData } = require("../../db/index");

const updateEvent = () => {
  updataData()
    .then((result) => result.json())
    .catch(console.log);
};

module.exports = updateEvent;
