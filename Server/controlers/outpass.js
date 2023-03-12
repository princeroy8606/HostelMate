const Outpass = require('../models/outpass')
const Student = require('../models/students')

//get all outpass
exports.getAllOutpass = async(req, res)=>{
    try{
        const outpasess = await Outpass.find()
        res.status(200).json(outpasess)
    }catch(err){
        res.status(400).json(err)
    }
}

//add new outpass
exports.newOutpass = async (req, res)=>{
    const StudentId = req.params.id;
    const student = await Student.findById(StudentId);
    console.log(student)
    try{
        const outpass = new Outpass({
            studentId:student._id,
            studentName:student.studentName,
            date:req.body.date,
            timeFrom:req.body.timeFrom,
            timeTo:req.body.timeTo,
            reason:req.body.reason,
            accepted:req.body.accepted,
            rejected:req.body.rejected,
        })
        await outpass.save()
        student.outpass.push(outpass._id)
        student.save();
        res.status(200).json(outpass)
    }catch(err){
        res.status(404).json(err)
    }
}

//get outpasses of specific student
exports.getStudentOutpass = async (req,res)=>{
    const StudentId = req.params.id;
    try{
        const outpass = await Outpass.find({studentId:StudentId});
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