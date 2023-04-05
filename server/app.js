const express = require("express");
const router = require("./routes/routes");
const path = require('path')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"..","public")))

app.use(router);

module.exports = app;
