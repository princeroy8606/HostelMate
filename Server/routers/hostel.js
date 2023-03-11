const express = require("express");
const router = express.Router();

const Hostel = require("../controlers/hostel");

router.get("/",Hostel.geAlltHostel);
router.get("/:id",Hostel.getHostel);
router.post('/',Hostel.addHostel)

module.exports=router;