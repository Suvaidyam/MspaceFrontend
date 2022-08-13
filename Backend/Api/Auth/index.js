const express = require('express');
const router = express.Router();


const Login = require('./Login')
router.post('/login', Login)
const register = require('./Register')
router.post('/register', register)






module.exports = router