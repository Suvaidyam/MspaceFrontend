const express = require('express');
const router = express.Router();

router.use('/auth', require('./Auth'));

router.get('/company-list', require('./Company/crud').findAll);

router.use(require('./Auth/VerifyToken'));

router.use('/company', require('./Company'));
router.use('/employee', require('./employee'));

module.exports = router;