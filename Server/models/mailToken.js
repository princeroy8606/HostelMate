const mongoose = require('mongoose');

const mailTokenSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel",
        required:true
    },
    token:{
        type:String,
        required:true
    },
    userModel:{
        type:String,
        required:true,
        enum:['Student','Warden']
    },
    createdAt:{
        type:Date,
        expires:1600,
        default:Date.now()
    }
})

const MailOTP = mongoose.model('MailOTP',mailTokenSchema)
module.exports = MailOTP;