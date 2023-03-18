const  mongoose  = require("mongoose");

const complaintSchema = new mongoose.Schema({
    studentId:{type:String,required:true},
    studentName:{type:String,required:true},
    date:{type:String,required:true},
    complaint:{type:String,required:true},
    // accepted:{type:Boolean,required:true},
    // rejected:{type:Boolean,required:true}
})

const Complaints  = mongoose.model('Complaints',complaintSchema)
module.exports = Complaints