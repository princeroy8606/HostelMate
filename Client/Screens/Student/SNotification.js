import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import assets from '../../Components/Assets/assets';
import Style from './Style';


const SNotification = () => {
  return (
    <ImageBackground style={[Style.homeConatiner]} source={assets.IMAGES.bg1}>
      <View style={[Style.TopContent, { alignItems: "center", marginTop: 20, height: "105%" }]}>
        <View style={Style.complaintContainer}>
          <View style={Style.complaintHeader}>
            <Text style={{ fontSize: 20, fontWeight: 600, color: "black" }}>Notifications</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default SNotification