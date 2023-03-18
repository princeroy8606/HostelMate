const express = require('express');
const router = express.Router()

const Complaints = require('../controlers/complaints')

router.get('/:id',Complaints.getAllComplaints)
router.post('/:id',Complaints.addNewComplaint)


module.exports = router;