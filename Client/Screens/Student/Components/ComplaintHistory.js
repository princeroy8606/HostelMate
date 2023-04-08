import { View, Text } from 'react-native'
import React from 'react';
import Style from '../Style';

const ComplaintHistory = () => {
  return (
    <View style={Style.complaintContainer}>
         <View style={Style.complaintHeader}>
            <Text style={{fontSize:20,fontWeight:600,color:"black"}}>Complaint History</Text>
          </View>
    </View>
  )
}

export default ComplaintHistory