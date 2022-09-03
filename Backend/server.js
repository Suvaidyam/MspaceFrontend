const express = require('express')
const app = express()
const port = process.env.PORT ||4000
require('./DataBase/ConnectDB.js')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Cors = require('cors')
app.use(Cors());
const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/', require('./Api'));

app.get("*", (req, res) => {
    res.send("404 page not get");
  });

app.listen(port, () => console.log(`app listening on port ${port}!`))