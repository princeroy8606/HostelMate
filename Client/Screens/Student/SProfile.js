import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import assets from '../../Components/Assets/assets';
import Style from './Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SProfile = () => {
  return (
    <ImageBackground style={[Style.homeConatiner]} source={assets.IMAGES.bg1}>
      <View style={[Style.TopContent, { alignItems: "center", marginTop: 30, height: "105%" }]}>
        <View style={[Style.complaintContainer, { backgroundColor: "#ECDFDF" }]}>
          <View style={Style.profileHeader}>
            <View style={Style.profilePic}>
              <Image source={assets.IMAGES.ProfileIcon} />
            </View>
            <Text>Profile Name</Text>
          </View>
          <View style={Style.profileContainer}>
            <View style={Style.CollegeDetails}>
              <View style={Style.Details}>
                <Text>Register no            :</Text>
                <Text>Roll no                    :</Text>
                <Text>Room no               :</Text>
              </View>
              <View style={Style.Details}>
                <Text>this is good </Text>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
            <View style={[Style.CollegeDetails, { height: "30%" }]}>
              <View style={Style.Details}>
                <Text>Father Name  :</Text>
                <Text>Date of birth  :</Text>
                <Text>Blood group   :</Text>
                <Text>Community    :</Text>
                <Text>Religion          :</Text>
              </View>
              <View style={Style.Details}>
                <Text>this is good </Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
            <View style={Style.CollegeDetails}>
              <View style={Style.Details}>
                <Text>Phone no       :</Text>
                <Text>Mobile no      :</Text>
                <Text>Email id          :</Text>
              </View>
              <View style={Style.Details}>
                <Text>this is good </Text>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
          </View>
          <View style={Style.profileBottom}>
            <TouchableOpacity style={[Style.logout, { backgroundColor: "#89AEB6", borderRadius: 50 }]}>
              <MaterialIcons name='logout' size={20} style={{ alignSelf: "center", paddingRight: 10 }} />
              <Text style={{ alignSelf: "center", fontSize: 20 }}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Style.logout, { backgroundColor: "red", borderRadius: 50 }]}>
              <AntDesign name='delete' size={20} color={"white"} style={{ alignSelf: "center", paddingRight: 10 }} />
              <Text style={{ alignSelf: "center", fontSize: 20, color: "white" }}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default SProfile