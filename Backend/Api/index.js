const express = require('express');
const router = express.Router();

router.use('/auth', require('./Auth'));

router.get('/company-list', require('./Company/crud').findAll);

// router.use(require('./Auth/VerifyToken'));


router.use('/company', require('./Company'));
router.use('/employee', require('./employee'));
router.use('/companyspace', require('./CompanySpace'));
router.use('/spacebooking', require('./SpaceBooking'));

module.exports = router;