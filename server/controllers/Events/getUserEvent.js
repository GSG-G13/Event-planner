const { getAttendees } = require('../../db');

const getAttendee = (req, res , next) => {
    const { eventId } = req.body
    getAttendees(eventId)
    .then((result) => {
        res.json({
            result: result.rows
        })
    })
    .catch((e) => {
        next(e)
        // res.json({
        //     massage : "Enter the Right Event ID"
        // })
    })
}

module.exports = {getAttendee}