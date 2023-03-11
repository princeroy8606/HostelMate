const express = require("express");
const router =  express.Router();

const Warden = require('../controlers/warden')

// const Warden = require('../controllers/warden');

router.get('/',Warden.getAllWardens)
// router.get('/',)
router.post('/', Warden.addWarden)

module.exports=router;
