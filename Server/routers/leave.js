    const express = require('express');
    const router = express.Router()

const Leaves = require('../controlers/leave')

router.get('/:id',Leaves.getAllLeaves)
router.post('/:id',Leaves.addLeaves)
router.get('/student/:id',Leaves.getStudentLeaves)
router.patch('/:id',Leaves.updateLeaves)

module.exports = router;