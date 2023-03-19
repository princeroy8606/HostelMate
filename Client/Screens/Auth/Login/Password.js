import { View, Text ,TextInput,ImageBackground, TouchableOpacity,Image, KeyboardAvoidingView} from 'react-native'
import styles from '../Style';
import assets from '../../../Components/Assets/assets';
import React, { useState } from 'react'

const Password = () => {

    const handleSubmit =()=>{

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
            <TextInput placeholder='Create password' style={[styles.registerInputs,{marginBottom:20,marginTop:15}]} secureTextEntry/>
            <TextInput placeholder='Re-enter password' style={[styles.registerInputs,{marginBottom:20}]} secureTextEntry />
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