import { View, Text ,ImageBackground} from 'react-native'
import React from 'react';
import assets from '../../Components/Assets/assets';
import Style from './Style';

const SProfile = () => {
  return (
    <ImageBackground style={Style.homeConatiner} source={assets.IMAGES.bg1}>
    <Text>Profile</Text>
  </ImageBackground>
  )
}

export default SProfile