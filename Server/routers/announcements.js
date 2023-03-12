const express = require('express');
const router = express.Router();

const Announcements = require('../controlers/announcements');


router.get('/',Announcements.getAllAnnouncements);
router.post('/:id',Announcements.newAnnouncement);
router.delete('/:id',Announcements.deleteAnnouncement)

module.exports = router;