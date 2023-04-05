// const { insertEvent } = require('../../db/query/postData')
const { insertEvent } = require('../../db/index')

const addEvent = (req, res, next) => {
    const { eventName, location, data, details } = req.body;
    insertEvent({ eventName, location, data, details })
        .then((data) => {
            if (data) {
                return res.json({
                    status: 201,
                    msg: 'user created successfully',
                    data: data.rows[0],
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