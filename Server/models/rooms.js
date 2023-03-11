const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNo:"Number",
    roomType:"Number",
    students:[{type:mongoose.Schema.Types.ObjectId,ref:"Students"}],
    services:[{type:mongoose.Schema.Types.ObjectId,ref:"Services"}],
    maintanances:[{type:mongoose.Schema.Types.ObjectId,ref:"Maintaances"}]
})

const Rooms = mongoose.model("Rooms",roomSchema);
module.exports=Rooms;