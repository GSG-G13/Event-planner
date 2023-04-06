const { insertEvent, insertUser } = require("./query/postData");
const { getEvents } = require("./query/getData");
const { updateData } = require("./query/updateData");
module.exports = { insertEvent, insertUser, getEvents, updateData };
