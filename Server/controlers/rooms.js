const Rooms = require('../models/rooms');
const Hostel = require('../models/hostels')

exports.getAllRooms = async(req,res)=>{
    try{
        const rooms = await Rooms.find();
        res.status(200).json(rooms)
    }catch(err){
        console.log(err)
    }
}

exports.addRooms = async(req,res)=>{
    const hostelId= req.body.hostelId
    const hostel = await Hostel.findOne({hostelId:hostelId})
    const{roomNo,roomType}=req.body;
    try{
        const room = new Rooms({
            roomNo,
            roomType
        })
        await room.save()
        res.status(200).json(room)
        hostel.rooms.push(room._id)
        hostel.save()
    }catch(err){
        console.log(err)
    }
}