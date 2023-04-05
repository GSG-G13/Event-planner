require("dotenv").config();
const { Pool } = require("pg");

const connectionString = process.env.DB_URL;
const connection = new Pool({ connectionString, ssl: false });

module.exports = connection;
