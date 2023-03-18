const Hostel = require('../models/hostels');
const Maintaances = require('../models/maintenance');
const Rooms = require('../models/rooms');
const Students = require('../models/students');

//get all maintenance
exports.getAllMaintenance = async(req,res)=>{
    const hostelid = req.params.id;
    const hostel = await Hostel.findOne({hostelId:hostelid})
    try{
        const maintenance = await hostel.populate('maintenances')
        console.log(maintenance)
        res.status(200).json(maintenance)
    }catch(err){
        res.status(400).json({err})
    }
}

//add new Maintenance
exports.addNewMaintenance = async(req,res)=>{
    const studentId = req.params.id;
    const student  = await Students.findById(studentId)
    const hostelid = req.body.hostelId
    const hostel  = await Hostel.findOne({hostelId:hostelid})
    const RoomNo = student.roomNo
    const room = await hostel.populate('rooms')
    room.rooms.forEach( async room =>{
        if(room.roomNo === RoomNo){
            try{
                const maintenance = new Maintaances({
                    roomNo:RoomNo,
                    maintenance:req.body.maintenance,
                    studentId:student._id,
                    date:req.body.date
                })
                await maintenance.save()
                hostel.maintenances.push(maintenance._id)
                hostel.save()
                room.maintenances.push(maintenance._id)
                room.save()
                console.log(room)
                student.maintenances.push(maintenance._id)
                student.save()
                res.status(200).json(maintenance)
            }catch(err){
                res.status(400).json(err)
            }
        }
    })
}

//get Maintenance for single room 
exports.getRoomMaintenance = async(req,res)=>{
    try{
        const room = await Rooms.findOne({roomNo:req.params.id})
        console.log(room)
         const maintenance = await room.populate('maintenances')
        res.status(200).json(maintenance)
    }catch(err){
        res.status(400).json(err)
    }
}