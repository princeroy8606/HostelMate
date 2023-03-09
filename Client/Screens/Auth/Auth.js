import { View, Text,ImageBackground,TouchableOpacity,Button, KeyboardAvoidingView} from 'react-native';
import styles from './Style';
import assets from '../../Components/Assets/assets';
import Animated,{useSharedValue,useAnimatedStyle, withTiming}from 'react-native-reanimated';
import { useState } from 'react';
import Register from './HostelRegister/Register';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const Auth = () => {
  const translateY = useSharedValue(0);
  const RegistrationForm = useSharedValue(0)
  const [isClicked,setClicked]=useState(true);
  const animatedStyle=useAnimatedStyle(()=>{
    return{
      transform:[{translateY :withTiming(translateY.value,{duration:800})}]
    }
  })
  const handleRegister =()=>{
    translateY.value= -1000,
    setClicked(false);
  }
  const handleSignUp =()=>{
    translateY.value= -700
    setClicked(false)
  }
  return (
    <ImageBackground source={assets.IMAGES.bg1} style={styles.authContainer}>
     <View style={styles.hostelSignUpContainer}>
      {
        isClicked === false && (
            <Register/>
        )
     }
      <Animated.View style={[{flex:1},animatedStyle]}>
      <ImageBackground style={[styles.shape]} source={assets.IMAGES.shapes}>
        <ImageBackground source={assets.IMAGES.Authimg} style={styles.authimg}/>
        {
          isClicked && (
            <Animated.View style={[styles.authBtnContainer]}>
            <View style={styles.authBtnCover}>
            <TouchableOpacity onPress={handleRegister}>
              <View style={[styles.authBtnR]}>
              <Text style={styles.regText}>Register</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp}>
              <View style={[styles.authBtnS] }>
              <Text style={styles.signUpText}>SignUp</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
          )
        }
      </ImageBackground>
      </Animated.View>
      </View>
    </ImageBackground>
  )
}

export default Auth;