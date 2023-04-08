// const { insertUser } = require('../../db/query/postData')
const {insertUser} = require('../../db/index')

const addUser = (req, res, next) => {
    const { username, password } = req.body
    insertUser({ username, password })
        .then((data) => {
            if (data) {
                res.json({
                    status: 201,
                    massage: "the event has been added successfully",
                    data: data.rows[0]
                })
            } else {
                res.json({
                    status: 400,
                    massage: "invalid data",
                })
            }
        })
        .catch((e) => {
            next(e)
        })
}

module.exports = { addUser }