const express = require('express')
require('dotenv').config()
require('./controller/db_connection');
const bodyParser = require("body-parser");
const app = express()
const port = process.env.PORT

const router = require('./routes/router')
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})