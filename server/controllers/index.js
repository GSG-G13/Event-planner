const { getAllEvents } = require("./Events/getEvent");
const { addEvent } = require("./Events/addEvent");
const { addUser } = require("./Users/addUser");
const {login} = require('./Users/login')
module.exports = { getAllEvents, addEvent, addUser ,login};
