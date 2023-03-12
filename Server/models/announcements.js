const mongoose = require('mongoose');

const announcementsSchema = new mongoose.Schema({
    wardenId:{type:String,required:true},
    wardenName:{type:String,required:true},
    announcement:{type:String,required:true}
}) 

const Announcements = mongoose.model('Announcements',announcementsSchema);
module.exports = Announcements;