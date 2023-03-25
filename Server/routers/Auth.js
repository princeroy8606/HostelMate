const express = require("express");
const router = express.Router();

const Auth = require('../controlers/Auth')

router.get('/:id',Auth.validHostel)
router.post('/signup',Auth.singnUp)
router.post('/login',Auth.logIn)
router.post('/email',Auth.emailVerification)
router.post('/OTP',Auth.OTPVerification)

module.exports = router;