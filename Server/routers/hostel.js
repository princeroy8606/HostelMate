const express = require("express");
const router = express.Router();

const Hostel = require("../controlers/hostel");

router.get("/",Hostel.getAllHostel);
router.post('/',Hostel.addHostel)

module.exports=router;