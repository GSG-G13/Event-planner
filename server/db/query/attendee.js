const connection  = require('../config/connection');
const getAttendees = (eventId) => {
    return connection.query('select events.event_name, users.id, users.name from events JOIN attendees on events.id = attendees.event_id join users on users.id = attendees.user_id where events.id = ($1);',[eventId]);
}
module.exports = { getAttendees }
