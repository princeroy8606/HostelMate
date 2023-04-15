import axios from 'axios';

const API = axios.create({ baseURL: "http://172.20.10.4:3000" })

export const validateHostel = (hostelId) => API.get(`/Auth/${hostelId.hostelId}`)
export const verifyEmail = (maildata) => API.post('/Auth/email', maildata)
export const VerifyOTP = (OTPdata) => API.post('/Auth/OTP', OTPdata)
export const singnUp = (userData) => API.post('/Auth/signup', userData)
export const logIn = (loginData) => API.post('/Auth/login', loginData, console.log(loginData))