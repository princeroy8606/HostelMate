
const authReducer = (state = {
    mailData:null,
    hostelData:null,
    OTPdata:null,
},action)=>{
    switch (action.type){
        case "VALIDATE_HOSTEL":
            return{...state,hostelData:action?.data};
        case "EMAIL_VERIFICATION":
            return{...state,mailData:action?.data};
        case "OTP_VERIFICATION":   
            return{...state,OTPdata:action?.data};
        default:
        return state;
    }
    
}

export default authReducer