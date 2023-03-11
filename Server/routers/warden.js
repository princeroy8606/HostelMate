const express = require("express");
const router =  express.Router();

const Warden = require('../controlers/warden')


router.get('/',Warden.getAllWardens)
router.post('/', Warden.addWarden)

module.exports=router;
