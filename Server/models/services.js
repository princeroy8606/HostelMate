const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
        studentId:{type:String,required:true},
        roomNo:{type:Number,required:true},
        serviceType:{type:String,required:true},
        date:{type:String,required:true}
})

const Services = mongoose.model('Services',servicesSchema)
module.exports = Services;