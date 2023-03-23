const Students = require('../models/students');
const Hostel = require('../models/hostels');
const Rooms = require('../models/rooms');


//get all students in the hostel
exports.getAllStudents =  async(req,res)=>{
    const HostelId = req.params.id
    try{
        const hostel = await Hostel.findOne({hostelId:HostelId})
        const students = await hostel.populate('students')
        console.log(students)
        res.status(200).json(students)
    }catch(err){
        console.log(err)
    }
}

//add new student 
exports.addStudent = async(req,res)=>{
    const hostelId= req.body.hostelId
    const hostel = await Hostel.findOne({hostelId:hostelId})
    const room = await Rooms.findOne({roomNo:req.body.roomNo})
    const email = req.body.Email;
    const existingStudent = await Students.findOne({studentEmail:email})
    // console.log(existingStudent)
    if(!existingStudent){
        try{
            const student = new Students({
                studentName:req.body.Name,
                studentPassword:req.body.password,
                studentEmail:req.body.Email,
                studentId:req.body.Rollno,
                studentPh:req.body.Ph,
                roomNo:req.body.roomNo
            })
            await student.save()
            hostel.students.push(student._id)
            hostel.save()
            room.students.push(student._id)
            room.save()
            res.status(200).json(student)
        }catch(err){
            res.status(404).json({message:err})
        }
    }else{
        res.status(500).json({message:"Warden email alreday exist"})
    }
}

// delete Student
exports.deleteStudent = async(req,res)=>{
    const hostelId= req.body.hostelId
    const hostel = await Hostel.findOne({hostelId:hostelId})
    const Email = req.params.id
    const existingStudent = await Students.findOne({studentEmail:Email})
    const room = await Rooms.findOne({roomNo:existingStudent.roomNo})
    if (existingStudent){
        try{
             const result = await Students.deleteOne({studentEmail:Email})
             hostel.students.pull(existingStudent._id)
             hostel.save();
             room.students.pull(existingStudent._id)
             room.save()
            res.status(200).json(result)
            }catch(err){
                res.status(500).json(err)
            }
    }else{
        res.status(400).json({message:"Sanm kayililla"})
    }
}