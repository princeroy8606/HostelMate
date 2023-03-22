const Hostel = require('../models/hostels')
const Students = require('../models/students')
const Wardens = require('../models/warden')
const bcrypt = require('bcrypt')

exports.validHostel = async(req,res)=>{
    const HostelId = req.body.hostelId
    try{
    const hostel = await Hostel.findOne({hostelId:HostelId})
    if(!hostel){
        res.status(404).json({hostelExist:false,message:"Hostel Not Found"})
    }else{
        res.status(200).json({hostel,hostelExist:true})
    }
    }
    catch(err){
        res.status(400).json(err)
    }
    
}

exports.logIn = async(req,res)=>{
    const user = req.body.user
    const email = req.body.email
    const password = req.body.password
    console.log(password,email,user)
    if(user === "Student"){
      const  student = await Students.findOne({studentEmail:email})
      if(!student){
          res.status(404).json({message:"The Email does't Exist"})
      }else{
          try{
            bcrypt.compare(password ,student.studentPassword,function(err,result){
                console.log(result)
                res.status(200).json({result,student})
            })
          }catch(err){
              res.status(400).json(err)
          }
      }
    }else if(user === "Warden"){
      const  warden = await Wardens.findOne({wardenEmail:email})
      if(!warden){
        res.status(404).json({message:"The Email does't Exist"})
    }else{
        try{
          const wardenPassword = warden.wardenPassword
          bcrypt.compare(password ,wardenPassword,function(err,result){
              console.log(result)
          })
        }catch(err){
            res.status(400).json(err)
        }
    }
}
}

exports.singnUp = async(req,res)=>{
    const {password,email,user} = req.body;
    try{
        if(user === "Student"){
            const  student = await Students.findOne({studentEmail:email})
            if(!student){
                res.status(404).json({message:"The Email does't Exist"})
            }
            const hashedPassword = await bcrypt.hash(password,12)
            const Student = await Students.findByIdAndUpdate(student._id,{studentPassword:hashedPassword},{new:true})
            res.status(200).json(Student)
        }
    }catch(err){
        res.status(500).json(err)
    }
}

exports.emailVerification= async(req,res)=>{
    
}