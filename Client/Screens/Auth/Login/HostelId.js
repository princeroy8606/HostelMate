import { View, Text ,TextInput} from 'react-native'
import React from 'react'
import styles from '../Style'

const hostelId = ({hostelID,sethosteID}) => {
  return (
    <View style={styles.hostelId}>
         <TextInput placeholder='Hostel Id' style={styles.registerInputs} onChangeText={(e)=> sethosteID({...hostelID,hostelId:e})} value={hostelID.hostelId}/>
    </View>
  )
}

export default hostelId