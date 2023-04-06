const { getAllEvents } = require("./Events/getEvent");
const { addEvent } = require("./Events/addEvent");
const { addUser } = require("./Users/addUser");
const { updateEvent } = require("./Events/updateEvent");
module.exports = { getAllEvents, addEvent, addUser, updateEvent };
