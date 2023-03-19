import { View, Text,ImageBackground,TouchableOpacity,} from 'react-native';
import styles from './Style';
import assets from '../../Components/Assets/assets';
import Animated,{useSharedValue,useAnimatedStyle, withTiming}from 'react-native-reanimated';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const Auth = () => {
  const Navigation = useNavigation()
  return (
    <ImageBackground source={assets.IMAGES.bg1} style={styles.authContainer}>
     <View style={styles.hostelSignUpContainer}>
      <View style={[{flex:1}]}>
      <ImageBackground style={[styles.shape]} source={assets.IMAGES.shapes}>
        <ImageBackground source={assets.IMAGES.Authimg} style={styles.authimg}/>
            <View style={[styles.authBtnContainer]}>
            <View style={styles.authBtnCover}>
            <TouchableOpacity onPress={()=> Navigation.navigate('Register')}>
              <View style={[styles.authBtnR]}>
              <Text style={styles.regText}>Register</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Navigation.navigate('Login')}>
              <View style={[styles.authBtnS] }>
              <Text style={styles.signUpText}>SignIn</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      </View>     
      </View>
    </ImageBackground>
  )
}

export default Auth;