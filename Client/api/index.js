import axios from 'axios';

const API = axios.create({baseURL:"htttp://http://localhost:3000"})

export const validateHostel = (hostelId)=> API.post('/Auth/',hostelId)
export const verifyEmail = (maildata)=> API.post('/Auth/email',maildata)
export const VerifyOTP = (OTPdata)=> API.post('/Auth/OTP',OTPdata)