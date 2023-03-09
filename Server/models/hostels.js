const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
    hostelName:{type:String,required:true},
    hosteId:{type:String,required:true},
    rooms:[{type:mongoose.Schema.Types.ObjectId,ref:"Rooms"}],
    wardens:[{type:mongoose.Schema.Types.ObjectId,ref:"Warden"}],
    students:[{type:mongoose.Schema.Types.ObjectId,ref:"Student"}]
})

const Hostel = mongoose.model("Hostel",hostelSchema);
module.exports=Hostel;