const express = require('express');
const router = require('./routes/routes')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(router);
app.listen(5000,() => {
    console.log('server is running')
})

module.exports = app ;

