const Menu = require('../models/ menu');
const Hostel = require('../models/hostels');

//get all feadbacks
exports.getAllFeadback = async (req, res) => {
    const hostelId = req.params.id
    const [day, month, year] = req.body.date.split('-')
    const inputDate = new Date(year, month - 1, day).toDateString()
    console.log()
    const hostel = await Hostel.findOne({ hostelId: hostelId })
    try {
        const Menus = await hostel.populate('menus')
        Menus.menus.forEach(menu => {
            if (menu.date === inputDate) {
                res.status(200).json(menu)
            }
        })
    } catch (err) {
        res.status(404).json(err)
    }
}

//  add new feadback
exports.addFeadback = async (req, res) => {
    const hostelId = req.params.id
    const hostel = await Hostel.findOne({ hostelId: hostelId })
    const [day, month, year] = req.body.date.split('-')
    const inputDate = new Date(year, month - 1, day).toDateString()
    try {
        const Menus = await hostel.populate('menus')
        Menus.menus.forEach(async menu => {
            if (menu.date === inputDate) {
                menu.raiting.push(req.body.raiting)
                menu.save()
                res.status(200).json(menu)
            }
        })
    } catch (err) {
        res.status(404).json(err)
    }
}