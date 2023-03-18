const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
    hostelName:{type:String,required:true},
    hostelId:{type:String,required:true,unique:true},
    hostelAddress:{type:String,required:true},
    rooms:[{type:mongoose.Schema.Types.ObjectId,ref:"Rooms"}],
    wardens:[{type:mongoose.Schema.Types.ObjectId,ref:"Wardens"}],
    students:[{type:mongoose.Schema.Types.ObjectId,ref:"Students"}],
    outpass:[{type:mongoose.Schema.Types.ObjectId,ref:"Outpass"}],
    leaves:[{type:mongoose.Schema.Types.ObjectId,ref:"Leaves"}],
    announcements:[{type:mongoose.Schema.Types.ObjectId,ref:"Announcements"}],
    menus:[{type:mongoose.Schema.Types.ObjectId, ref:"Menu"}],
    complaints:[{type:mongoose.Schema.Types.ObjectId,ref:'Complaints'}],
    services:[{type:mongoose.Schema.Types.ObjectId,ref:'Services'}],
    maintenances:[{type:mongoose.Schema.Types.ObjectId,ref:"Maintenances"}]
});

const Hostel = mongoose.model("Hostel",hostelSchema);
module.exports=Hostel;