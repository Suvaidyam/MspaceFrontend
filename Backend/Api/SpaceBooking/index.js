const express = require('express');
const router = express.Router();


const crud = require('./crud');
router.get('/', crud.findAll);
router.get('/:_id', crud.findById);
router.post('/', crud.create);
router.put('/:_id', crud.updateOne);
router.patch('/:_id', crud.deleteOne);

module.exports = router