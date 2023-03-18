
const Menu = require('../models/ menu');
const Hostel = require('../models/hostels');
const Wardens = require('../models/warden');


//get all menus
exports.getAllMenu = async(req,res)=>{
   const hostelId = req.params.id
   const hostel = await Hostel.findOne({hostelId:hostelId})
   try{
       const menus = await hostel.populate('menus')
        res.status(200).json(menus)
    }catch(err){
        res.status(404).json(err)
    }
}

//add new Menu 
exports.newMenu = async(req,res)=>{
    const wardenId = req.params.id
    const [day,month,year] = req.body.date.split('-')
    const inputDate = new Date(year,month-1,day).toDateString()
    const hostelId = req.body.hostelId
    const hostel = await Hostel.findOne({hostelId:hostelId})
    const warden = await Wardens.findById(wardenId)
    try{
        const menu = new Menu({
            date:inputDate,
            menu:req.body.menu,
        })
        await menu.save()
        hostel.menus.push(menu._id)
        hostel.save()
        warden.menus.push(menu._id)
        warden.save()
        res.status(200).json(menu)
    }catch(err){
        res.status(400).json(err)
    }
}

//get prev