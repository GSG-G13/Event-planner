const {updateEvent} = require('../../db/index');

const updateEventReq = (req, res) => {
    let {id, eventName,location, data, details } = req.body  
    updateEvent({id, eventName,location, data, details })
    .then((data) => {
        res.json(data.rows)
    })
    .catch((err) => {
        res.json({
            error
        })
    })


}

module.exports = {updateEventReq}
