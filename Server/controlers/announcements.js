const Announcements = require('../models/announcements');
const Hostel = require('../models/hostels');
const Wardens = require('../models/warden');
const Warden = require('../models/warden')


//get All Announcements
exports.getAllAnnouncements = async(req,res)=>{
    const hostelId = req.params.id;
    console.log(hostelId)
    const hostel = await Hostel.findOne({hostelId:hostelId})
    try{
        const announcements = await hostel.populate('announcements')
        res.status(200).json(announcements)
    }catch(err){
        res.status(404).json(err)
    }
};

//add new Announcements
exports.newAnnouncement = async(req,res)=>{
    const hostelId = req.body.hostelId
    const hostel = await Hostel.findOne({hostelId:hostelId})
    const WardenId = req.params.id
    const warden = await Warden.findById(WardenId);
    try{
        const announcement = new Announcements({
            wardenId:WardenId,
            wardenName:warden.wardenName,
            announcement:req.body.announcement
        })
        await announcement.save();
        hostel.announcements.push(announcement._id);
        hostel.save()
        warden.announcements.push(announcement._id);
        warden.save()
        res.status(201).json(announcement)
    }catch(err){
        res.status(401).json({err})
    }
}

//delete Announcements 
exports.deleteAnnouncement = async(req,res)=>{
    const AnnouncementId = req.params.id
    const announcement = await Announcements.findById(AnnouncementId);
    const warden = await Warden.findById(announcement.wardenId)
    try{
        const result= await Announcements.deleteOne(announcement._id)
        warden.announcements.pull(announcement._id)
        warden.save()
       res.status(200).json(result);
    }catch(err){
        res.status(404).json(err)
    }
}

// get wardens announcements
exports.getWardensAnnouncement = async(req,res)=>{
    const wardenId=req.params.id
    const warden = await Wardens.findById(wardenId)
    try{
        const history = await warden.populate('announcements')
        console.log(history)
        res.status(200).json(history)
    }catch(err){
        res.status(404).json(err)
    }
}