const mongoose = require('mongoose');

const wardenSchema= new mongoose.Schema({
    wardenName:{type:String,required:true},
    wardenEmail:{type:String,required:true},
    wardenPassword:{type:String,required:true},
    students:[{type:mongoose.Schema.Types.ObjectId,ref:'Students'}],
    complaints:[{type:mongoose.Schema.Types.ObjectId,ref:"Complaints"}],
    outpass:[{type:mongoose.Schema.Types.ObjectId,ref:"Outpass"}],
    leaves:[{type:mongoose.Schema.Types.ObjectId,ref:"Leaves"}],
    announcements:[{type:mongoose.Schema.Types.ObjectId,ref:"Announcements"}],
    maintenances:[{type:mongoose.Schema.Types.ObjectId,ref:"Maintenances"}],
    menus:[{type:mongoose.Schema.Types.ObjectId,ref:"Menus"}],
    raitings:[{type:mongoose.Schema.Types.ObjectId,ref:"Raitings"}],
})
const Wardens = mongoose.model("Wardens",wardenSchema)
module.exports = Wardens 