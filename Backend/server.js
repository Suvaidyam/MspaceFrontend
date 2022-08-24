const express = require('express')
const app = express()
const port = 4000
require('./DataBase/ConnectDB.js')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Cors = require('cors')
app.use(Cors());


app.use('/', require('./Api'))

app.listen(port, () => console.log(`app listening on port ${port}!`))