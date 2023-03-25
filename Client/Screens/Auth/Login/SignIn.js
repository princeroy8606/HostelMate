import { View, Text ,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import styles from '../Style'
import { useDispatch } from 'react-redux'



const SignIn = () => {
const [userType,setUserType]= useState('Student');
const [password,setPassword] = useState();
const [Email,setEmail] = useState();
const dispatch = useDispatch()

const setWarden=()=>{
 if(userType === 'Warden')return{backgroundColor:"#B1A7A6"}
}
const setStudent = ()=>{
  if(userType === 'Student')return{backgroundColor:"#B1A7A6"}
}



  return (
    <View style={[styles.hostelId,{justifyContent:"flex-start"}]}>
      <View style={[styles.userTypeContainer]}>
        <TouchableOpacity style={[styles.userType,setStudent()]} onPress={()=>setUserType('Student')}>
          <Text style={styles.signUpText}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.userType,{backgroundColor:"black"},setWarden()]} onPress={()=>setUserType('Warden')}>
          <Text  style={styles.signUpText}>Warden</Text>
        </TouchableOpacity>
      </View>
         <TextInput placeholder='Email' style={[styles.registerInputs,{marginBottom:35}]} onChangeText={(value)=>setPassword(...password,value)}/>
         <TextInput placeholder='Password' style={styles.registerInputs} secureTextEntry/>
         <View style={{position:"absolute",left:"15%",bottom:"25%"}}>
         <TouchableOpacity>
             <Text style={{color:"#9BBA9E"}}>Forgot password ?</Text>
         </TouchableOpacity>
         </View>
    </View>
  )
}

export default SignIn