const express = require('express')
const app = express()
const port = 3000
require('./DataBase/ConnectDB.js')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const company = require('./Api/Company/index')

app.use('/company', company);

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))