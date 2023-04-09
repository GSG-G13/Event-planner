const { getUser, addAttendee } = require('../../db');

const customError = (msg, status) => {
    let error = new Error(msg);
    error.status = status;
    return error;
  };

const login = (req,res, next) => {
    const {body: { username, password, eventId } } = req
    getUser(username)
    .then(({rows}) => {
        if(rows.length <= 0)  throw customError("user does not exit", 404)
        let user = rows[0]
        if(user.password !== password)  throw customError("password is wrong", 400)
        return addAttendee(user.id, eventId)     
        })
        .then(({rows}) => {
            return res.json({
                massage : "add the user successfully to event ",
                eventId : `${eventId}`,
                rows
        })
        })
    .catch((error) =>  {
        next(error)
    })
}

module.exports = {login}


