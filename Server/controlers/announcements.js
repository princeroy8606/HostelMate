const Announcements = require('../models/announcements');
const Warden = require('../models/warden')


//get All Announcements
exports.getAllAnnouncements = async(req,res)=>{
    try{
        const announcement = await Announcements.find()
        res.status(200).json(announcement)
    }catch(err){
        res.status(400).json({err})
    }
};

//add new Announcements
exports.newAnnouncement = async(req,res)=>{
    const WardenId = req.params.id
    const warden = await Warden.findById(WardenId);
    try{
        const announcement = new Announcements({
            wardenId:WardenId,
            wardenName:warden.wardenName,
            announcement:req.body.announcement
        })
        await announcement.save();
        res.status(201).json(announcement)
        warden.announcements.push(announcement._id);
        warden.save()
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