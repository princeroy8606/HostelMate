const express = require("express");
const router = express.Router();

const Auth = require('../controlers/Auth')

router.get('/',Auth.validHostel)
router.post('/signup',Auth.singnUp)
router.post('/login',Auth.logIn)
router.post('/email',Auth.emailVerification)
router.post('/OTP',Auth.OTPVerification)
router.post('/password',Auth.addPassword)



module.exports = router;