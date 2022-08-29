const express = require('express')
const app = express()
const port = 4000
require('./DataBase/ConnectDB.js')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Cors = require('cors')
app.use(Cors());
const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/', require('./Api'));

app.listen(port, () => console.log(`app listening on port ${port}!`))