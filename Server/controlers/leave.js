const Leaves = require('../models/leave')
const Hostel = require('../models/hostels')
const Student = require('../models/students')


//get all leaves in the hostel
exports.getAllLeaves = async(req,res)=>{
    const hostelId = req.params.id;
    try{
        const hostel = await Hostel.findById(hostelId)
        const leaves = await hostel.populate('leaves')
        res.status(200).json(leaves)
    }catch(err){
        res.status(404).json(err)
    }
}

//add new leaves
exports.addLeaves = async(req,res)=>{
    const StudentId = req.params.id;
    const student = await Student.findById(StudentId);
    const [day,month,year] = req.body.date.split('-')
    const inputDate = new Date(year,month-1,day).toDateString()
    const hostelId = req.body.hostelId
    const hostel= await Hostel.findOne({hostelId:hostelId});
    try{
        const leave = new Leaves({
            studentId:student.studentId,
            studentName:student.studentName,
            date:inputDate,
            leaveFrom:req.body.leaveFrom,
            leaveTo:req.body.leaveTo,
            leaveReason:req.body.reason,
            accepted:req.body.accepted,
            rejected:req.body.rejected,
        })
        await leave.save()
        student.leaves.push(leave._id)
        student.save();
        hostel.leaves.push(leave._id)
        hostel.save()
        res.status(200).json(leave)
    }catch(err){
        res.status(404).json(err)
    }
}

//get Student leaves 
exports.getStudentLeaves = async (req,res)=>{
    const StudentId = req.params.id;
    console.log(StudentId);
    try{
        const leaves = await Leaves.find({studentId:StudentId});
        res.status(200).json(leaves);
    }catch(err){
        res.status(404).json(err)
    }
}

//accept|| reject outpass
exports.updateLeaves = async(req,res)=>{
    const leavesId = req.params.id;
    try{
        const leaves = await Leaves.findByIdAndUpdate(leavesId,req.body,{new:true});
        leaves.save()
        console.log(leaves)
        res.status(200).json(leaves)
    }catch(err){
        res.status(404).json(err)
    }
}