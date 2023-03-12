const express = require("express");
const router =  express.Router();

const Students = require('../controlers/students')


router.get('/:id',Students.getAllStudents)
router.post('/', Students.addStudent)
router.delete('/:id',Students.deleteStudent)

module.exports=router;