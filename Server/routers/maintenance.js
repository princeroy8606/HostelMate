const express = require("express");
const router = express.Router();

const Maintenances = require('../controlers/maintenance')

router.get('/:id',Maintenances.getAllMaintenance);
router.post('/:id',Maintenances.addNewMaintenance);
router.get('/room/:id',Maintenances.getRoomMaintenance)

module.exports = router