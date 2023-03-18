const express = require('express')
const router = new express.Router();

const Outpass = require('../controlers/outpass')

router.get('/:id',Outpass.getAllOutpass);
router.post('/:id',Outpass.newOutpass)
router.get('/student/:id',Outpass.getStudentOutpass)
router.patch('/:id',Outpass.updateOutpass)

module.exports = router;