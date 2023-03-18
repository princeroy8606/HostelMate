const express = require("express");
const router = express.Router();


const Feadback = require('../controlers/feedback')

router.get('/:id',Feadback.getAllFeadback)
router.post('/:id',Feadback.addFeadback)

module.exports = router;