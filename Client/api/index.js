import axios from 'axios';

const API = axios.create({baseURL:"http://192.168.66.89:3000"})

export const validateHostel = (hostelId)=> API.get('/Auth',hostelId.hostelId)
export const verifyEmail = (maildata)=> API.post('/Auth/email',maildata)
export const VerifyOTP = (OTPdata)=> API.post('/Auth/OTP',OTPdata)