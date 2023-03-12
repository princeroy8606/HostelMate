const express = require("express");
const router =  express.Router();

const Warden = require('../controlers/warden')


router.get('/:id',Warden.getAllWardens)
router.post('/', Warden.addWarden)
router.delete('/:id',Warden.deleteWarden)

module.exports=router;
