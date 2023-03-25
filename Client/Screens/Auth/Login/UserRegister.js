import { View, Text, TextInput ,TouchableOpacity,KeyboardAvoidingView, Keyboard} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "../Style";
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { verifyemail, verifyOTP } from "../../../Redux/actions/Auth";

const input = Array(4).fill('')
let newInputIndex  = 0
let data ={
  OTP:'',
  mailID:''
}
//converting object to array
const isObjvalid = (obj) => {
  return Object.values(obj).every(val => val.trim())
}
// 
const UserRegister = () => {
  const inputRef = useRef()
  const [ showMail, setShowMail ] = useState(true);
  const [Email,setEmail] = useState({userType:"Student",email:""})
  const [OTP , setOTP] = useState({0:'',1:'',2:'',3:''})
  const [nextInputIndex,setNextInputIndex]=useState(0)
  const dispatch = useDispatch()
  const Navigation = useNavigation()
  const emailStatus = useSelector(state => state.authReducer.mailData)
  const otpStatus = useSelector(state => state.authReducer.OTPdata)


  // send and confirm otp
  const handleRegister = () =>{
    Keyboard.dismiss();
    if(isObjvalid(OTP)){
      let value ='';
      Object.values(OTP).forEach(val => {
        value = value+val
      })
      data.OTP=value,
      dispatch(verifyOTP(data))
    }
  }
  useEffect(()=>{
    if(otpStatus?.verified)  Navigation.navigate("SetPassword",{Email})
  },[otpStatus])

  // send and confirm email
  const handleOTP =()=>{
    dispatch(verifyemail(Email))
  }
  useEffect(()=>{
    console.log(emailStatus?.mailOTP._id)
    if(emailStatus?.success) setShowMail(!showMail)
    data.mailID=emailStatus?.mailOTP._id
  },[emailStatus])
  

  const handleChangeText = (text,index) =>{
      const newOTP = {...OTP}
      newOTP[index] = text
      setOTP(newOTP) 
      const lastInputIndex = input.length-1
      if(!text) {
        newInputIndex = index === 0 ? 0 : index - 1;
      }else{
        newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
      }
      setNextInputIndex(newInputIndex)
    };
    useEffect(()=>{
      inputRef.current?.focus()
    },[nextInputIndex])

  return (
    <View style={[styles.hostelId]}>
      {showMail ? (
        <TextInput
          placeholder="Email"
          style={[styles.registerInputs, { marginBottom: 85 }]}
          onChangeText={(e)=> setEmail({...Email,email:e})}
        />
      ) : (
         <KeyboardAvoidingView style ={styles.registerBottom}>
            <Text style={{color:"white"}}>Please verify your email , PIN has been sent to your email</Text>
            <View style={{flexDirection:"row",gap:15, marginTop:15}} >
              {
                input.map((inp,index)=>{
                  return <View style={styles.OtpInputContainer} key={index}>
                    <TextInput 
                    ref={nextInputIndex === index ? inputRef : null}
                    value={OTP[index]}
                    onChangeText={((text)=> handleChangeText(text,index))}
                    keyboardType="numeric" maxLength={1} 
                    style={styles.OtpInput}
                    placeholder="0"
                    />
                  </View>
                  
                })
              }
            </View>
          </KeyboardAvoidingView>
      )}
       {
         showMail ?(
          <TouchableOpacity onPress={handleOTP}>
          <View style={[styles.authBtnS,{backgroundColor:"#AA131A",height:50,flexDirection:"row",}]}>
           <Text style={[styles.signUpText,{marginRight:12}]}>Get OTP</Text>
          </View>
         </TouchableOpacity>

         ):(
          <TouchableOpacity onPress={handleRegister}>
          <View style={[styles.authBtnS,{backgroundColor:"#BA181B",height:50,flexDirection:"row",}]}>
           <Text style={[styles.signUpText,{marginRight:12}]}>Register</Text>
          </View>
         </TouchableOpacity>
         )
       }
    </View>
  );
};

export default UserRegister;
