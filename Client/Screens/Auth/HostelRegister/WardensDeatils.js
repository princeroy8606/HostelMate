import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import styles from '../Style';

const WardensDeatils = (formData,setFormData) => {
  return (
    <View style={styles.registerBottom}>
    <TextInput placeholder='Warden Name' style={styles.registerInputs} 
    onChangeText={e=>setFormData({...formData,hostelName:e})} />
    <TextInput placeholder='Wardem id' style={styles.registerInputs}
    onChangeText={e=>setFormData({...formData,hostelId:e})}/>
    <TextInput placeholder='Warden mail :' style={[styles.registerInputs]}
    onChangeText={e=>setFormData({...formData,wardenEmail:e})}/>
    </View>
  )
}

export default WardensDeatils