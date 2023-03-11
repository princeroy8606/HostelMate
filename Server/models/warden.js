const mongoose = require('mongoose');

const wardenSchema= new mongoose.Schema({
    wardenName:{type:String,require:true},
    wardenEmail:{type:String,require:true},
    wardenPassword:{type:String,require:true},
    students:[{type:mongoose.Schema.Types.ObjectId,ref:'Student'}],
    complaints:[{type:mongoose.Schema.Types.ObjectId,ref:"Complaint"}],
    outpass:[{type:mongoose.Schema.Types.ObjectId,ref:"Outpass"}],
    leaves:[{type:mongoose.Schema.Types.ObjectId,ref:"Leaves"}],
    announcements:[{type:mongoose.Schema.Types.ObjectId,ref:"Announcement"}],
    maintenances:[{type:mongoose.Schema.Types.ObjectId,ref:"Maintenance"}],
    food:[{type:mongoose.Schema.Types.ObjectId,ref:"Food"}],
    raitings:[{type:mongoose.Schema.Types.ObjectId,ref:"Raiting"}],
})
const Wardens = mongoose.model("Wardens",wardenSchema)
module.exports = Wardens