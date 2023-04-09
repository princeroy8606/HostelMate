const Hostel = require('../models/hostels')
const Students = require('../models/students')
const MailOTP = require('../models/mailToken')
const Wardens = require('../models/warden')

const { generateOTP, mailTransport, generateEmailTemplate } = require('../utils/email')
const bcrypt = require('bcrypt')

//  validate the hostel .........
exports.validHostel = async (req, res) => {
    const HostelId = req.params.id
    try {
        const hostel = await Hostel.findOne({ hostelId: HostelId })
        if (!hostel) {
            res.status(400).json({ hostelExist: false, message: "Hostel Not Found" })
        } else {
            res.status(200).json({ hostel, hostelExist: true })
        }
    }
    catch (err) {
        res.status(400).json(err)
    }

}

// login.............
exports.logIn = async (req, res) => {
    const userType = req.body.userType
    const email = req.body.email
    const password = req.body.password
    console.log(req.body)
    if (userType === "Student") {
        const student = await Students.findOne({ studentEmail: email })
        if (!student) {
            res.status(404).json({ message: "The Email does't Exist" })
        } else {
            try {
                bcrypt.compare(password, student.Password, function (err, result) {
                    console.log(result)
                    res.status(200).json({ result, student, userType: userType })
                })
            } catch (err) {
                res.status(400).json(err)
            }
        }
    } else if (user === "Warden") {
        const warden = await Wardens.findOne({ wardenEmail: email })
        if (!warden) {
            res.status(404).json({ message: "The Email does't Exist" })
        } else {
            try {
                const wardenPassword = warden.Password
                bcrypt.compare(password, wardenPassword, function (err, result) {
                    console.log(result)
                })
            } catch (err) {
                res.status(400).json(err)
            }
        }
    }
}

// singup..........
exports.singnUp = async (req, res) => {
    console.log(req.body)
    const { password, email, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12)
    try {
        if (userType === "Student") {
            const student = await Students.findOne({ studentEmail: email })
            if (!student) {
                res.status(404).json({ message: "The Email does't Exist" })
            } else {
                const Student = await Students.findByIdAndUpdate(student._id, { Password: hashedPassword }, { new: true })
                res.status(200).json({ Student, userType: userType })
            }
        } else {
            const warden = await Students.findOne({ wardenEmail: email })
            console.log(warden)
            if (!warden) {
                res.status(404).json({ message: "The Email does't Exist" })
            } else {
                const Warden = await Students.findByIdAndUpdate(warden._id, { Password: hashedPassword }, { new: true })
                res.status(200).json(Warden)
            }
        }
    } catch (err) {
        res.status(500).json(err)
    }
}


// verify the email and send OTP...........
exports.emailVerification = async (req, res) => {
    let userModel;
    let user;
    const randomOTP = Math.round(Math.random() * 9999)
    const { userType, email } = req.body
    console.log(req.body)
    if (userType === 'Student') {
        userModel = 'Student'
        user = await Students.findOne({ studentEmail: email })
    } else {
        userModel = 'Warden'
        user = await Wardens.findOne({ wardenEmail: email })
    }
    if (user) {
        try {
            const OTP = generateOTP(randomOTP)
            const mailOTP = new MailOTP({
                userId: user._id,
                token: await OTP,
                userModel: userModel
            })
            mailTransport().sendMail({
                from: "yourhostelmate@gmail.com",
                to: email,
                subject: "verification of Your hostel Mate account",
                text: "Please verify the otp in your hostel mate application to verify your email ",
                html: generateEmailTemplate(randomOTP)
            })
            await mailOTP.save()
            res.status(200).json({ mailOTP, message: "OTP sent Successfully..", success: true, Email: email })
        } catch (err) {
            res.status(400).json(err)
        }
    } else {
        res.status(400).json({ message: "user dont exist " })
    }

}

//verify the otp ............
exports.OTPVerification = async (req, res) => {
    let user
    const { OTP, mailID } = req.body
    const mail = await MailOTP.findById(mailID)
    console.log(mail)
    if (mail) {
        try {
            const hashedOTP = mail.token
            const otp = await bcrypt.compare(OTP, hashedOTP)
            if (otp) {
                if (mail.userModel === 'Student') {
                    user = await Students.findById(mail.userId)
                } else {
                    user = await Wardens.findById(mail.userId)
                }
                await MailOTP.findByIdAndDelete(mailID)
                console.log(mail)
                res.status(200).json({ userType: mail.userModel, verified: true, userId: user._id },)
            } else {
                res.status(400).json({ message: "The Given OTP Is Wrong" })
            }
        } catch (err) {
            res.status(400).json(err.message)
        }
    } else {
        res.status(400).json({ message: "OTP expired ... get new one" })
    }
}
