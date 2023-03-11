const express = require('express');
const router = express.Router();

const Rooms = require('../controlers/rooms');

router.get('/',Rooms.getAllRooms);
router.post('/',Rooms.addRooms)

module.exports =router;