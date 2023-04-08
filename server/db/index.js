const { insertEvent, insertUser } = require("./query/postData");
const { getEvents } = require("./query/getData");
const { getUser } = require('./query/getUser')
const { addAttendee } = require('./query/addAttendee')
const { getAttendees } = require('./query/attendee')
module.exports = { insertEvent, insertUser, getEvents ,getUser ,addAttendee,getAttendees };
