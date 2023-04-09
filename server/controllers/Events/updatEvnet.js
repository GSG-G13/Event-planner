const {updateEvent} = require('../../db');

const updateEventReq = (req, res, next) => {
    let { body: {id, eventName,location, data, details }} = req  
    updateEvent({id, eventName,location, data, details })
    .then(({rows}) => {
        res.json(rows)
    })
    .catch((error) => {
        next(error)
    })


}

module.exports = {updateEventReq}
