const express = require('express');
const router = express.Router();

const Rooms = require('../controlers/rooms');

router.get('/:id',Rooms.getAllRooms);
router.post('/',Rooms.addRooms)
router.post('/bulk/',Rooms.createRooms)
router.delete('/:id',Rooms.deleteRoom)

module.exports =router;