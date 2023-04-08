const connection = require("../config/connection");

const addAttendee = (userId, eventId) => {
   return connection.query(`INSERT INTO attendees(user_id, event_id) Values($1,$2) RETURNING *`,[userId, eventId])
}

module.exports = {addAttendee}