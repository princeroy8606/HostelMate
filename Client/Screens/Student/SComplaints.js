import { View, Text ,ImageBackground,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react';
import assets from '../../Components/Assets/assets';
import Style from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';

const Complaints = () => {
  const height = Dimensions.get('window').height
  return (
    <ImageBackground style={[Style.homeConatiner,{height}]} source={assets.IMAGES.bg1}>
      <KeyboardAvoidingView style={[Style.TopContent,{alignItems:"center"}]}
      keyboardVerticalOffset={100}
      >
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
            <Text>Subject:</Text>
            <TextInput style={Style.complaintSubject}/>
          </View>
          <View style={Style.complaintBody}>
            <Text>Complaint details:</Text>
            <TextInput/>
          </View>
         </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default Complaints