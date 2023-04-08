import { View, Text ,ImageBackground,TouchableOpacity,Dimensions,StatusBar} from 'react-native'
import React, { useState } from 'react';
import assets from '../../Components/Assets/assets';
import Style from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';
import styles from '../Auth/Style';
import ComplaintHistory from './Components/ComplaintHistory';

const Complaints = () => {
  const [history,showHistory]=useState(false)

const handleHisory = ()=>{
  showHistory(!history)
}

  return (
    <ImageBackground style={[Style.homeConatiner]} source={assets.IMAGES.bg1}>
      <StatusBar />
      <View style={[Style.TopContent,{alignItems:"center"}]}>
        <View style={[Style.complaintTop]}>
          <TouchableOpacity style={Style.history} activeOpacity={0.8} onPress={handleHisory}>
            <Text>History</Text>
            <MaterialCommunityIcons name='history' size={30}/>
          </TouchableOpacity>
        </View>
        {
          history === true ? (<ComplaintHistory/>):(
            <View style={Style.complaintContainer}>
            <View style={Style.complaintHeader}>
            <Text style={{fontSize:20,fontWeight:600,color:"red"}}>COMPLAINTS</Text>
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
          <TouchableOpacity style={{width:"100%",flexDirection:"row",justifyContent:"flex-end",height:"20%",paddingRight:35}}         activeOpacity={0.6}>
              <View style={[styles.authBtnS,
                {backgroundColor:"red",alignSelf:"flex-end",elevation:10,shadowColor:"black",borderRadius:60}]}>
               <Text style={[styles.signUpText]}>Submit</Text>
              </View>
          </TouchableOpacity>
         </View>
         </View> 
          )
        }
      </View>
    </ImageBackground>
  )
}

export default Complaints