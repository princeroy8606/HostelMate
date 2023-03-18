const mongoose = require('mongoose');

const outpassSchema = new mongoose.Schema({
    studentId:{type:String,required:true},
    studentName:{type:String,required:true},
    date:{type:String,required:true},
    timeFrom:{type:String,required:true},
    timeTo:{type:String,required:true},
    reason:{type:String,required:true},
    accepted:{type:Boolean,required:true},
    rejected:{type:Boolean,required:true}
})

const Outpass = mongoose.model('Outpass',outpassSchema);
module.exports = Outpass;                                   