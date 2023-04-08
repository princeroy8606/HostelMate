import { View, Text ,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react';
import assets from '../../Components/Assets/assets';
import Style from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Complaints = () => {
  return (
    <ImageBackground style={Style.homeConatiner} source={assets.IMAGES.bg1}>
      <View style={[Style.TopContent,{alignItems:"center"}]}>
        <View style={Style.complaintTop}>
          <TouchableOpacity style={Style.history} activeOpacity={0.8}>
            <Text>History</Text>
            <MaterialCommunityIcons name='history' size={30}/>
          </TouchableOpacity>
        </View>
        <View style={Style.complaintContainer}></View>
      </View>
    </ImageBackground>
  )
}

export default Complaints