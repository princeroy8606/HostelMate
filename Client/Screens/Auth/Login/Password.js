import { View, Text ,TextInput,ImageBackground, TouchableOpacity,Image, KeyboardAvoidingView} from 'react-native'
import styles from '../Style';
import assets from '../../../Components/Assets/assets';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SingnUp } from '../../../Redux/actions/Auth';

const Password = ({route}) => {
  let data = {
    password:'' ,email:'',userType:''
  }

  const [password , setPassword] = useState('');
  const [conformPassword , setConformPassword] = useState('');
  const [isPasswordCrct,setIsPasswordCrct] = useState(true)
  const dispatch = useDispatch()
  const Email = useSelector((state)=> state.authReducer?.mailData?.Email)
  const user = useSelector((state)=> state.authReducer?.OTPdata?.userType)
  
  // const 
  
  useEffect(()=>{
  if(password === conformPassword) {
    setIsPasswordCrct(true)
  }else{
    setIsPasswordCrct(false)
  }
},[conformPassword])

const wrongPasswordStyle =()=>{
  if(!isPasswordCrct)
  return{
    borderColor:"red",
    borderWidth:2
  }
}

const handleSubmit =()=>{
  if(isPasswordCrct){
    data.password = password,
    data.email = Email,
    data.userType = user
  }
    dispatch(SingnUp(data))
    }
  return (
    <ImageBackground source={assets.IMAGES.bg1}style={[styles.registerForm]}>
    <View style={[styles.loginTop,{height:"45%"}]}>
    <TouchableOpacity style={styles.backBtn} >
            <Image source={assets.IMAGES.BackIcon} />
    </TouchableOpacity>
      <View>
        <ImageBackground source={assets.IMAGES.RegisterIcon} style={[styles.registerIcon,{height:200,width:200}]}/>
      </View>
    </View>
    <View style={styles.registerBottom}>
            <TextInput placeholder='Create password' style={[styles.registerInputs,{marginBottom:20,marginTop:15,}]} secureTextEntry 
            onChangeText={(text)=>setPassword(text)}/>
            <TextInput placeholder='Re-enter password' style={[styles.registerInputs,{marginBottom:20,},wrongPasswordStyle()]} secureTextEntry
            onChangeText={(text)=> setConformPassword(text)} />
            <TouchableOpacity onPress={handleSubmit} style={{marginTop:60}}>
                    <View style={[styles.authBtnS,{backgroundColor:"green",height:50,}]}>
                      <Text style={[styles.signUpText]}>Submit</Text>
                    </View>
                </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

export default Password