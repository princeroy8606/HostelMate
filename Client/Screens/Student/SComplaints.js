import { View, Text ,ImageBackground,TouchableOpacity,Dimensions,StatusBar} from 'react-native'
import React from 'react';
import assets from '../../Components/Assets/assets';
import Style from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';

const Complaints = () => {
  return (
    <ImageBackground style={[Style.homeConatiner]} source={assets.IMAGES.bg1}>
      <StatusBar />
      <View style={[Style.TopContent,{alignItems:"center"}]}>
        <View style={[Style.complaintTop]}>
          <TouchableOpacity style={Style.history} activeOpacity={0.8}>
            <Text>History</Text>
            <MaterialCommunityIcons name='history' size={30}/>
          </TouchableOpacity>
        </View>
        <View style={Style.complaintContainer}>
          <View style={Style.complaintHeader}>
            <Text>COMPLAINTS</Text>
          </View>
         <View style={Style.complaintCover}>
         <View style={[Style.complaintBody,{justifyContent:"center"}]}>
            <Text style={{fontSize:20,fontWeight:300}} >Subject:</Text>
            <TextInput style={Style.complaintSubject} placeholder='Complaint Subject..'/>
          </View>
          <View style={Style.complaintBody}>
            <Text style={{fontSize:20,fontWeight:300}}>Complaint details:</Text>
            <TextInput style={Style.complaintContent} multiline textAlignVertical='top' placeholder='Type Your Complaint here...'/>
          </View>
         </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Complaints