import { View, Text ,ImageBackground} from 'react-native'
import React from 'react';
import assets from '../../Components/Assets/assets';
import Style from './Style';

const Complaints = () => {
  return (
    <ImageBackground style={Style.homeConatiner} source={assets.IMAGES.bg1}>
      <View style={Style.TopContent}>

      </View>
    </ImageBackground>
  )
}

export default Complaints