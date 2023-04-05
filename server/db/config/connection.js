const { pool } = require("pg");
require("dotenv").config();

const connectionString = process.env.DB_URL;
const connection = new pool({ connectionString });

module.exports = connection;
