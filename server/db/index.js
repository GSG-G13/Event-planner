const { insertEvent, insertUser } = require("./query/postData");
const { getEvents } = require("./query/getData");
const {getUserFromDataBase} = require('./query/getUser')
module.exports = { insertEvent, insertUser, getEvents ,getUserFromDataBase};
