const Rooms = require('../models/rooms');
const Hostel = require('../models/hostels')
const Warden = require('../models/warden')

//get all rooms
exports.getAllRooms = async (req, res) => {
    let hostelId = req.params.id
    try {
        const hostel = await Hostel.findOne({ hostelId: hostelId })
        const room = await hostel.populate('rooms')
        res.status(200).json(room.rooms)
    } catch (err) {
        console.log(err)
    }
}

//add new room
exports.addRooms = async (req, res) => {
    const RoomNo = req.body.RoomNo;
    const hostelId = req.body.hostelId
    const hostel = await Hostel.findOne({ hostelId: hostelId })
    const Room = await hostel.populate('rooms')
    const existingRoom = Room.rooms.some(room => {
        return room.roomNo === RoomNo
    })
    if (!existingRoom) {
        try {
            const room = new Rooms({
                roomNo: req.body.RoomNo,
                roomType: req.body.RoomType
            })
            await room.save()
            hostel.rooms.push(room._id)
            hostel.save()
            res.status(201).json(room)
        } catch (err) {
            console.log(err)
        }
    } else {
        res.status(400).json({ message: "Room already exist" })
    }
}

// delete room
exports.deleteRoom = async (req, res) => {
    const Roomno = req.params.id
    const hostelId = req.body.hostelId
    const hostel = await Hostel.findOne({ hostelId: hostelId })
    const Room = await hostel.populate('rooms')
    const room = await Rooms.findOne({ roomNo: Roomno })
    console.log(room)
    const existingRoom = Room.rooms.some(room => {
        return room.roomNo.toString() === Roomno
    })
    if (existingRoom) {
        try {
            const result = await Rooms.deleteOne({ roomNo: Roomno })
            hostel.rooms.pull(room._id)
            hostel.save();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(400).json({ message: "Sanm kayililla" })
    }
}

//add bunch of room
exports.createRooms = async (req, res) => {
    let allRooms_ids = [];
    const RoomsData = req.body.roomsData;
    const hostelId = req.body.hostelId;
    const hostel = await Hostel.findOne({ hostelId: hostelId })
    const Room = await hostel.populate('rooms')
    try {
        await Promise.all(
            RoomsData?.map(async (rooms) => {
                let N = rooms.roomNoStarting
                for (let i = 0; i <= rooms.noOfRooms; i++) {
                    const existingRoom = Room.rooms.some(room => {
                        return room.roomNo === N
                    })
                    if (existingRoom) {
                        //     throw new Error("Room already exist")
                        //  }else{
                        try {
                            const newRoom = new Rooms({
                                roomNo: N,
                                roomType: rooms.roomType
                            })
                            await newRoom.save()
                            allRooms_ids.push(newRoom._id)
                            console.log('Room Created with room NO:' + N)
                        } catch (err) {
                            console.log(err)
                        }
                    }
                    N += 1;
                }
            })
        )
        if (allRooms_ids) {
            allRooms_ids.map(async (id) => {
                hostel.rooms.push(id)
                console.log(id)
            })
            await hostel.save()
        }

        // }
        res.status(201).json({ "message": "Rooms Created sucessfully" })
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ message: err.message })
    }
}
