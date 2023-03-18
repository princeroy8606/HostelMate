const Hostel = require('../models/hostels');

//get the hoistel with hostelId
exports.getHostel = async (req,res)=>{
    const hostelId=req.params.id
    try{
        const hostel = await Hostel.findOne({ hostelId: hostelId });
        res.status(200).json(hostel);
    }catch(err){
        res.status(404).json({message:"error"})
    }
};

//get all hostels
exports.geAlltHostel = async (req,res)=>{
    try{
        const hostel= await Hostel.find();
        res.status(200).json(hostel);
    }catch(err){
        res.status(404).json({message:"error"})
    }
};

//add new hostel
exports.addHostel = async(req,res)=>{
    const {hostelId} = req.body
    const existingHostel = await Hostel.findOne({hostelId:hostelId})
    if (!existingHostel){
        try{
            const hostel = new Hostel({
                hostelName:req.body.hostelName,
                hostelId:req.body.hostelId,
                hostelAddress:req.body.hostelAddress
                });
                await hostel.save();
                res.json(hostel)
            }catch(err){
                res.status(500).json(err)
            }
    }else{
        res.status(400).json({message:"Sanm kayilund"})
    }
}

//delete hostel 
exports.deleteHostel = async(req,res)=>{
    const hostelId = req.params.id
    const existingHostel = await Hostel.findOne({hostelId:hostelId})
    if (existingHostel){
        try{
           await Hostel.deleteOne({hostelId:hostelId})
            res.status(200).json({message:"Deleted"})
            }catch(err){
                res.status(500).json(err)
            }
    }else{
        res.status(400).json({message:"Sanm kayilund"})
    }
}
