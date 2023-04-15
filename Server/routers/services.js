const express = require('express')
const router = new express.Router();

const Services = require('../controlers/services')

//service Routers
router.get('/:id',Services.getAllServices);
router.post('/',Services.addNewServices);
router.get('/room/:id',Services.getRoomService)


module.exports = router;