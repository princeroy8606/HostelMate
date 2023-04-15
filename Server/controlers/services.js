const Hostel = require('../models/hostels');
const Rooms = require('../models/rooms');
const Services = require('../models/services');
const Students = require('../models/students');
const Warden = require('../models/warden');

//get all services
exports.getAllServices = async (req, res) => {
    const hostelid = req.params.id;
    const hostel = await Hostel.findOne({ hostelId: hostelid })
    try {
        const services = await hostel.populate('services')
        console.log(services)
        res.status(200).json(services.services)
    } catch (err) {
        res.status(400).json({ err })
    }
}

//add new Services
exports.addNewServices = async (req, res) => {
    const studentId = req.body.studentId;
    const student = await Students.findById(studentId)
    const hostelid = req.body.hostelId
    const hostel = await Hostel.findOne({ hostelId: hostelid })
    const RoomNo = student.roomNo
    const room = await hostel.populate('rooms')
    room.rooms.forEach(async room => {
        if (room.roomNo === RoomNo) {
            try {
                const service = new Services({
                    roomNo: RoomNo,
                    serviceType: req.body.serviceType,
                    studentId: student._id,
                    date: req.body.date
                })
                await service.save()
                hostel.services.push(service._id)
                hostel.save()
                room.services.push(service._id)
                room.save()
                student.services.push(service._id)
                student.save()
                res.status(200).json(service)
            } catch (err) {
                res.status(400).json(err)
            }
        }
    })
}

//get service for single room 
exports.getRoomService = async (req, res) => {
    try {
        const room = await Rooms.findOne({ roomNo: req.params.id })
        const service = await room.populate('services')
        res.status(200).json(service)
    } catch (err) {
        res.status(400).json(err)
    }
}