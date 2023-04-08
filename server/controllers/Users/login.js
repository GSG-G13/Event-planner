const { getUser, addAttendee } = require('../../db/index')

const login = (req,res) => {
    const {username, password, eventId} = req.body
    getUser(username)
    .then((result) => {
        if(result.rows.length <= 0){
             return res.json({
                massage:'user does not exit'
            })
        }else{
            result.rows.forEach((user) => {
                if(user.name === username && user.password === password){
                    addAttendee(user.id, eventId).then(() => {
                        return res.json({
                             id : user.id,
                             name : user.name,
                             password : user.password,
                             eventId : `${eventId}`
                    })
                    })
                }else{
                     return res.json({
                        massage : 'password or username is wrong'
                    })
                }
            })
        }
    })
    .catch((e) =>  res.json({massage : "error happen"}))
}
module.exports = {login}