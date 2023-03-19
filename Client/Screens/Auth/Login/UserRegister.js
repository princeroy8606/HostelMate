import { View, Text, TextInput ,TouchableOpacity,KeyboardAvoidingView, Keyboard} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "../Style";
import { useNavigation } from '@react-navigation/native';

const input = Array(4).fill('')
let newInputIndex  = 0
//converting object to array
const isObjvalid = (obj) => {
  return Object.values(obj).every(val => val.trim())
}

const UserRegister = () => {
  const inputRef = useRef()
  const [ showMail, setShowMail ] = useState(true);
  const [OTP , setOTP] = useState({0:'',1:'',2:'',3:''})
  const [nextInputIndex,setNextInputIndex]=useState(0)

  
  const Navigation = useNavigation()
  
  const handleRegister = () =>{
    Keyboard.dismiss();
    if(isObjvalid(OTP)){
      let value ='';
      Object.values(OTP).forEach(val => {
        value = value+val
      })
    }
    // Navigation.navigate("SetPassword")
  }
  
  const handleOTP =()=>{
    setShowMail(!showMail)
  }

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
