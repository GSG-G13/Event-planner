// const { insertEvent } = require('../../db/query/postData')
const { insertEvent } = require('../../db/index')

const addEvent = (req, res, next) => {
    const { body: { eventName, location, data, details } } = req;
    insertEvent({ eventName, location, data, details })
        .then(({rows}) => {
            if (rows.length > 0) {
                return res.json({
                    status: 201,
                    msg: 'user created successfully',
                    data: rows[0],
                })
            }
            res.json({
                status: 400,
                msg: "invalid data",
            })
        })
        .catch((e) => {
            next(e)
        })
}

module.exports = { addEvent }