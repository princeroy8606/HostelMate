const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
    hostelName:{type:String,required:true},
    hostelId:{type:String,required:true,unique:true},
    rooms:[{type:mongoose.Schema.Types.ObjectId,ref:"Rooms"}],
    wardens:[{type:mongoose.Schema.Types.ObjectId,ref:"Wardens"}],
    students:[{type:mongoose.Schema.Types.ObjectId,ref:"Students"}]
},{strictPopulate: false});

const Hostel = mongoose.model("Hostel",hostelSchema);
module.exports=Hostel;