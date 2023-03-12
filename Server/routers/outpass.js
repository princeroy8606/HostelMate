const express = require('express')
const router = new express.Router();

const Outpass = require('../controlers/outpass')

router.get('/',Outpass.getAllOutpass);
router.post('/:id',Outpass.newOutpass)
router.get('/:id',Outpass.getStudentOutpass)
router.patch('/:id',Outpass.updateOutpass)

module.exports = router;