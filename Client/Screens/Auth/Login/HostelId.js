import { View, Text ,TextInput} from 'react-native'
import React from 'react'
import styles from '../Style'

const hostelId = () => {
  return (
    <View style={styles.hostelId}>
         <TextInput placeholder='Hostel Id' style={styles.registerInputs}/>
    </View>
  )
}

export default hostelId