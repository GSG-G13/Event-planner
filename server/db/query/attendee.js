const connection  = require('../config/connection');

const getAttendees = (eventId) => {
    return connection.query('SELECT events.event_name, users.id, users.name from events JOIN attendees ON events.id = attendees.event_id JOIN users ON users.id = attendees.user_id WHERE events.id = ($1);',[eventId]);
}
module.exports = { getAttendees }

