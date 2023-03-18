const mongoose = require("mongoose");


const menuSchema = new mongoose.Schema({
    date:{type:String,required:true},
    menu:[{
        time:{type:String,required:true},
        food:{type:String,required:true}
    }],
    raiting:[{type:Number}]
})

const Menu = mongoose.model('Menu',menuSchema)
module.exports=Menu