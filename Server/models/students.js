const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentName:{type:String,required:true},
    studentPh:{type:Number,required:true},
    studentId:{type:String,required:true},
    studentEmail:{type:String,required:true},
    roomNo:{type:Number,required:true},
    Password:{type:String},
    complaints:[{type:mongoose.Schema.Types.ObjectId, ref:"Complaints"}],
    leaves:[{type:mongoose.Schema.Types.ObjectId, ref:"Leaves"}],
    outpass:[{type:mongoose.Schema.Types.ObjectId, ref:"Outpass"}],
    announcements:[{type:mongoose.Schema.Types.ObjectId, ref:"Announcements"}],
    services:[{type:mongoose.Schema.Types.ObjectId, ref:"Services"}],
    maintenances:[{type:mongoose.Schema.Types.ObjectId,ref:"Maintenances"}],
    raitings:[{type:mongoose.Schema.Types.ObjectId, ref:"Raitings"}],
})

const Students = mongoose.model('Students',studentSchema)
module.exports=Students;