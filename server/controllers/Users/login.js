const {getUserFromDataBase} = require('../../db/index')

const login = (req,res) => {
    const {username, password} = req.body
    getUserFromDataBase(username)
    .then((result) => {
        if(result.rows[0]['name'] === username && result.rows[0]['password'] === password){      
            return res.json({
                result: result.rows[0]['name']
            })
        }else{
            return res.json({
                massage : "password is wrong"
            })
        }
        
    })
    .catch((err) => {
        res.json({
            massage:'user does not exit'
        })
        console.log(err)
    })
}
module.exports = {login}