const express = require('express');
const router = express.Router();


const Login = require('./Login')
router.post('/login', Login)
const register = require('./Register')
router.post('/register', register)

const verifyToken = require('../../Middleware/VerifyToken');
const logout = require('./Logout')
router.post('/logout', verifyToken, logout)

module.exports = router