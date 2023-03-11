const Hostel = require('../models/hostels');
const Warden = require('../models/warden')

//get the hoistel with hostelId
exports.getHostel = async (req,res)=>{
    const hostelId=req.params.id
    try{
        const hostel= await Hostel.findOne({hostelId:hostelId});
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
                });
                await hostel.save();
                res.json(hostel)
            }catch(err){
                res.status(500).json(err)
            }
    }else{
        res.status(404).json({message:"Sanm kayilund"})
    }
}