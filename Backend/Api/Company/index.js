const express = require('express');
const router = express.Router();

const crud = require('./crud');
router.get('/', crud.findAll);
router.get('/:id', crud.findById);
router.post('/', crud.create);
router.put('/', crud.updateOne);

module.exports = router