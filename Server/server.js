
const express = require("express");
const mongoose= require("mongoose");
require('dotenv').config();
const hostelRouter = require("./routers/hostel")
const wardenRouter = require("./routers/warden")
const app = express();

app.get("/",(req,res)=>{
    res.send("The hostel management app api");
});


mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{
    app.listen(3000,()=>{
        console.log("got it")
     })
})
.catch((err)=>{
    console.log(err)
})

app.use(express.json({limit:"40mb", extended:true}))
// 
app.use("/hostel",hostelRouter)
app.use("/warden",wardenRouter)

