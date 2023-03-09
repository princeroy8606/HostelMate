const Hostel = require('../models/hostels');

exports.getAllHostel = async (req,res)=>{
    try{
        const hostel= await Hostel.find();
        res.status(200).json(hostel);
    }catch(err){
        res.status(404).json({message:"error"})
    }
};

exports.addHostel = async(req,res)=>{
const data ={hostelName:"My name",hostelId:"12234"};
try{
        const hostel = new Hostel(data);
        await hostel.save();
        res.json(hostel)
    }catch(err){
        res.status(500).json(err)
    }
}