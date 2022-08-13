const express = require('express');
const router = express.Router();


const { register, login, verifyToken } = require('./Companyauth');
router.post('/register', register)
router.post('/login', login)

router.use(verifyToken);





module.exports = router