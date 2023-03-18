const Outpass = require('../models/outpass')
const Student = require('../models/students')
const Hostel = require('../models/hostels');

//get all outpass of specific hostel 
exports.getAllOutpass = async(req, res)=>{
    const hostelId = req.params.id;
    try{
        const hostel = await Hostel.findById(hostelId)
        const outpasess = await hostel.populate('outpass')
        res.status(200).json(outpasess)
    }catch(err){
        res.status(400).json(err)
    }
}

//add new outpass
exports.newOutpass = async (req, res)=>{
    const StudentId = req.params.id;
    const student = await Student.findById(StudentId);
    const [day,month,year] = req.body.date.split('-')
    const inputDate = new Date(year,month-1,day).toDateString()
    const hostelId = req.body.hostelId
    const hostel= await Hostel.findOne({hostelId:hostelId});
    try{
        const outpass = new Outpass({
            studentId:student.studentId,
            studentName:student.studentName,
            date:inputDate,
            timeFrom:req.body.timeFrom,
            timeTo:req.body.timeTo,
            reason:req.body.reason,
            accepted:req.body.accepted,
            rejected:req.body.rejected,
        })
        await outpass.save()
        student.outpass.push(outpass._id)
        student.save();
        hostel.outpass.push(outpass._id)
        hostel.save();
        res.status(200).json(outpass)
    }catch(err){
        res.status(404).json(err)
    }
}

//get outpasses of specific student
exports.getStudentOutpass = async (req,res)=>{
    const StudentId = req.params.id;
    console.log(StudentId)
    try{
        const outpass = await Outpass.find({studentId:StudentId})
        res.status(200).json(outpass);
    }catch(err){
        res.status(404).json(err)
    }
}

//accept|| reject outpass
exports.updateOutpass = async(req,res)=>{
    const OutpassId = req.params.id;
    try{
        const outpass = await Outpass.findByIdAndUpdate(OutpassId,req.body,{new:true});
        outpass.save()
        console.log(outpass)
        res.status(200).json(outpass)
    }catch(err){
        res.status(404).json(err)
    }
}