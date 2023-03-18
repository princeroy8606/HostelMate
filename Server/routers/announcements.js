const express = require('express');
const router = express.Router();

const Announcements = require('../controlers/announcements');


router.get('/:id',Announcements.getAllAnnouncements);
router.get('/warden/:id',Announcements.getWardensAnnouncement);
router.post('/:id',Announcements.newAnnouncement);
router.delete('/:id',Announcements.deleteAnnouncement)

module.exports = router;