const express = require('express')
require('dotenv').config()
require('./controller/db_connection');
const app = express()
const port = process.env.PORT

const router = require('./routes/router')

app.use(router);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })