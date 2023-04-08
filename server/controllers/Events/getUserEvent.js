const { getAttendees } = require('../../db/index');
const getAttendee = (req, res) => {
    const { eventId } = req.body
    getAttendees(eventId)
    .then((result) => {
        res.json({
            result: result.rows
        })
    })
    .catch((e) => {
        res.json({
            massage : "Enter the Right Event ID"
        })

    })
}

module.exports = {getAttendee}