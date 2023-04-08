import { View, Text, ImageBackground,Image ,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import Style from './Style'
import assets from '../../Components/Assets/assets';
import { useIsFocused } from '@react-navigation/native';

const StudentHome = () => {
  const isFocused = useIsFocused()
  console.log(isFocused)
  return (
    <ImageBackground style={Style.homeConatiner} source={assets.IMAGES.bg1}>
      {/* <StatusBar hidden /> */}
      <View style={Style.TopContent}>
       <View style={Style.menuServiceConatiiner}>
        <View style={Style.menuContainer}>
          <TouchableOpacity style={Style.menuBtn} activeOpacity={0.8}>
            <Text style={Style.btnText}>Daily menu</Text>
            <Image source={assets.IMAGES.MenuIcon} style={Style.btnImage}/>
          </TouchableOpacity>
        </View>
        <View  style={Style.serviceContainer}>
        <TouchableOpacity style={Style.serviceBtn} activeOpacity={0.8}>
            <Image source={assets.IMAGES.ServiceIcon} style={Style.btnImage}/>
            <Text style={Style.btnText}>Services</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={Style.middleContainer}>
        <View style={Style.middleCover}>
          <View style={Style.middleTopBtnContainer}>
            <TouchableOpacity style={Style.midlleTopBtn} activeOpacity={0.8}>
              <Text style={[Style.btnText,{fontSize:20,alignSelf:"center"}]}>Outpass</Text>
              <Image source={assets.IMAGES.OutPassBtn} style={Style.btnImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={Style.midlleTopBtn} activeOpacity={0.8}>
              <Text style={[Style.btnText,{fontSize:20,alignSelf:"center"}]}>Leave</Text>
            <Image source={assets.IMAGES.LeaveBtn} style={Style.btnImage}/>
            </TouchableOpacity>
          </View>
          <View style={Style.middleBottomContainer}>
            <View style={Style.ContactContainer}>
              <View style={Style.ContactCover}>
              <Text style={[Style.btnText,{fontSize:22}]} >Warden contact No:</Text>
              <View style={Style.phoneNumber}>
                <Text style={[Style.Contact,{letterSpacing:2}]} selectable>8606340493</Text>
                <Image source={assets.IMAGES.CallIcon}/>
              </View>
              <View style={Style.phoneNumber}>
                <Image source={assets.IMAGES.WhatsappIcon}/>
              <Text style={[Style.Contact,{letterSpacing:2}]} selectable>8606340493</Text>
              </View>
              </View>
              <Image source={assets.IMAGES.WardenIcon} />
            </View>
          </View>
          <View>
          </View>
        </View>
      </View>
    </View>
    </ImageBackground>
  )
}

export default StudentHome