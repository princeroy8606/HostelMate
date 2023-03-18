const express = require("express");
const router = express.Router();

const Menu = require('../controlers/menu')

router.get('/:id',Menu.getAllMenu)
router.post('/:id',Menu.newMenu)

module.exports = router 