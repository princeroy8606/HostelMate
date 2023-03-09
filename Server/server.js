const express = require("express");
const mongoose= require("mongoose");

const app = express();


app.use(express.json({limit:"40mb", extended:true}))

app.get("/",(req,res)=>{
    res.send("The hostel management app api");
});

const CONNECTION_URL="mongodb+srv://princeroy8606:hostelmanagement116@cluster0.xdbj8ps.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL)
.then(()=>{
    app.listen(3000,()=>{
        console.log("Hello world")
     })
})
