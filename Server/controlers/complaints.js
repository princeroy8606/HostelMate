const Complaints = require('../models/complaints')
const Hostel = require('../models/hostels')
const Student = require('../models/students')

//get All Complaints
exports.getAllComplaints = async(req,res)=>{
   const hostelid=req.params.id
   const hostel = await Hostel.findOne({hostelId:hostelid})
   try{
    const complaints = await hostel.populate('complaints')
    res.status(200).json(complaints)
   }catch(err){
       res.status(400).json(err)
   }
}


//add new complaint 
exports.addNewComplaint = async(req,res)=>{
    const [day,month,year] = req.body.date.split('-')
    const inputDate = new Date(year,month-1,day).toDateString()
    const StudentId = req.params.id;
    const student = await Student.findById(StudentId);
    const hostelId = req.body.hostelId
    const hostel= await Hostel.findOne({hostelId:hostelId});
    try{
        const complaint = new Complaints({
            studentId:student.studentId,
            studentName:student.studentName,
            date:inputDate,
            complaint:req.body.complaint
        })
        await complaint.save()
        student.complaints.push(complaint._id)
        student.save();
        hostel.complaints.push(complaint._id)
        hostel.save()
        res.status(200).json(complaint)
    }catch(err){
            res.status(404).json(err)
        } 
}   