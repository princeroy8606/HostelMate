const mongoose = require('mongoose');


const maintenanceSchema = new mongoose.Schema({
    studentId:{type:String,required:true},
    roomNo:{type:Number,required:true},
    maintenance:{type:String,required:true},
    date:{type:String,required:true}
})

const Maintenances = mongoose.model('Maintenances',maintenanceSchema)
module.exports = Maintenances

