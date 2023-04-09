
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const hostelRouter = require("./routers/hostel")
const wardenRouter = require("./routers/warden")
const roomsRouter = require('./routers/rooms')
const studentsRouter = require('./routers/students')
const announcementsRouter = require('./routers/announcements')
const outpassRouter = require('./routers/outpass')
const leavesRouter = require('./routers/leave')
const menuRouter = require('./routers/menu')
const feadbackRouter = require('./routers/feadback')
const complaintRouter = require('./routers/complaints')
const serviceRouter = require('./routers/services')
const maintananceRouter = require('./routers/maintenance')
const authenticationRouter = require('./routers/Auth')

const app = express();

app.get("/", (req, res) => {
    res.send("The hostel management app api");
});

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => {
        app.listen(3000, () => {
            console.log("got it")
        })
    })
    .catch((err) => {
        console.log(err)
    })
app.use(express.json());
// 
app.use("/hostel", hostelRouter)
app.use("/warden", wardenRouter)
app.use("/rooms", roomsRouter)
app.use('/students', studentsRouter)
app.use('/announcements', announcementsRouter)
app.use('/outpass', outpassRouter)
app.use('/leaves', leavesRouter)
app.use('/menu', menuRouter)
app.use('/feadback', feadbackRouter)
app.use('/complaints', complaintRouter)
app.use('/services', serviceRouter)
app.use('/maintenances', maintananceRouter)
app.use('/Auth', authenticationRouter)