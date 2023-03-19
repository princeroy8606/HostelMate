import { View, Text ,TextInput} from 'react-native'
import React from 'react'
import styles from '../Style'
import { TouchableOpacity } from 'react-native-gesture-handler'


const SignIn = () => {
  return (
    <View style={[styles.hostelId]}>
         <TextInput placeholder='Email' style={[styles.registerInputs,{marginBottom:45}]} />
         <TextInput placeholder='Password' style={styles.registerInputs} secureTextEntry/>
         <View style={{position:"absolute",left:"15%",bottom:"10%"}}>
         <TouchableOpacity>
             <Text style={{color:"#9BBA9E"}}>Forgot password ?</Text>
         </TouchableOpacity>
         </View>
    </View>
  )
}

export default SignIn