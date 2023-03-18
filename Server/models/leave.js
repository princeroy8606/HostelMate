const  mongoose  = require("mongoose");

const leaveSchema = new mongoose.Schema({
    studentId:{type:String,required:true},
    studentName:{type:String,required:true},
    date:{type:String,required:true},
    leaveFrom:{type:String,required:true},
    leaveTo:{type:String,required:true},
    leaveReason:{type:String,required:true},
    accepted:{type:Boolean,required:true},
    rejected:{type:Boolean,required:true}
})

const Leaves = mongoose.model('Leaves',leaveSchema)
module.exports = Leaves 
