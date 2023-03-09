import { View} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import styles from '../Style';

const HostelDetails = ({formData,setFormData}) => {
  return (
    <View style={styles.registerBottom}>
    <TextInput placeholder='Hostel Name' style={styles.registerInputs} 
    onChangeText={e=>setFormData({...formData,hostelName:e})} />
    <TextInput placeholder='Hostel Id' secureTextEntry style={styles.registerInputs}
    onChangeText={e=>setFormData({...formData,hostelId:e})}/>
    <TextInput placeholder='Hostel Address :' style={[styles.registerInputs,{height: 100}]} multiline textAlignVertical='top'
    onChangeText={e=>setFormData({...formData,hostelAdress:e})}/>
    </View>
  )
}

export default HostelDetails