const { insertUser } = require('../../db');

const addUser = (req, res, next) => {
    const { username, password } = req.body
    insertUser({ username, password })
        .then(({rows}) => {
            if (rows.length > 0) {
                res.json({
                    status: 201,
                    massage: "the event has been added successfully",
                    data: rows[0]
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

module.exports = { addUser };
