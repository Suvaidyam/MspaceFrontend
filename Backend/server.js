const express = require('express')
const app = express()
const port = 4000
require('./DataBase/ConnectDB.js')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const company = require('./Api/Company/index')
const Cors = require('cors')

app.use('/company', company);
app.use(Cors());
app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))