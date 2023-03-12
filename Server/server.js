
const express = require("express");
const mongoose= require("mongoose");
require('dotenv').config();

const hostelRouter = require("./routers/hostel")
const wardenRouter = require("./routers/warden")
const roomsRouter = require('./routers/rooms')
const studentsRouter = require('./routers/students')
const announcementsRouter = require('./routers/announcements')
const outpassRouter = require('./routers/outpass')

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
app.use("/rooms",roomsRouter)
app.use('/students',studentsRouter)
app.use('/announcements',announcementsRouter)
app.use('/outpass',outpassRouter)

