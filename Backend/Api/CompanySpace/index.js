const express = require('express');
const router = express.Router();

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.')[1])
    }
  })
  
  const upload = multer({ storage: storage })

const crud = require('./crud');
router.get('/', crud.findAll);
router.get('/:_id', crud.findById);
router.post('/',upload.single('file'), crud.create);
router.put('/:_id', crud.updateOne);
router.delete('/:_id', crud.deleteOne);

module.exports = router