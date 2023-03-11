const Warden = require('../models/warden');
const Hostel = require('../models/hostels')

//get all Wardens

exports.getAllWardens=async(req,res)=>{
    try{
        const warden = await Warden.find();
        res.status(200).json(warden)
    }catch(err){
        console.log(err)
    }
}

//add warden 

exports.addWarden = async(req,res)=>{
    const hostel = await Hostel.findOne({hostelId:"45453"})
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
}