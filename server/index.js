const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 7070


app.listen(PORT,() => console.log(`server is running on http://localhost:${PORT}`))