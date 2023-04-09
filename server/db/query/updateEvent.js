const connection = require('../config/connection');

const updateEvent = ({ id,eventName, location, data, details}) => {
    return connection.query('UPDATE events SET event_name = ($1), location = ($2), date = ($3),details =  ($4) WHERE id = ($5)  RETURNING*' , [eventName,location,data,details,id]);
}


module.exports = {updateEvent}