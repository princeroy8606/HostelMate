const Warden = require('../models/warden');
const Hostel = require('../models/hostels')

//get all Wardens
exports.getAllWardens=async(req,res)=>{
    const HostelId = req.params.id
    try{
        const hostel = await Hostel.findOne({hostelId:HostelId})
        const warden = await hostel.populate('wardens')
        res.status(200).json(warden)
    }catch(err){
        console.log(err)
    }
}

//add new warden 
exports.addWarden = async(req,res)=>{
    const hostelId= req.body.hostelId
    const hostel = await Hostel.findOne({hostelId:hostelId})
    const email = req.body.Email;
    const existingWarden = await Warden.findOne({wardenEmail:email})
    if(!existingWarden){
        try{
            const warden = new Warden({
                wardenName:req.body.wardenName,
                wardenPassword:req.body.password,
                wardenEmail:req.body.Email
            })
            await warden.save()
            res.status(200).json(warden)
            hostel.wardens.push(warden._id)
            hostel.save()
            res.status(200)
        }catch(err){
            console.log(err)
        }
    }else{
        res.status(500).json({message:"Warden email alreday exist"})
    }
}

//delete Warden
exports.deleteWarden = async(req,res)=>{
    const Email = req.params.id
    const hostelId= req.body.hostelId
    const hostel = await Hostel.findOne({hostelId:hostelId})
    const existingWarden = await Warden.findOne({wardenEmail:Email})
    if (existingWarden){
        try{
             const result = await Warden.deleteOne({wardenEmail:Email})
             hostel.wardens.pull(existingWarden._id)
             hostel.save();
            res.status(200).json(result)
            }catch(err){
                res.status(500).json(err)
            }
    }else{
        res.status(400).json({message:"Sanm kayililla"})
    }
}