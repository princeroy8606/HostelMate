import { View, Text, } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from '../Style';

const RoomDetails = ({formData,setFormData}) => {
  return (
    <View style={[styles.registerBottom,{height:"70%"}]}>
        <View style={styles.roomDetails}>
        <Text style={{textAlign:"center",color:"white"}}>Room Type</Text>
        <Text style={{textAlign:"center",color:"white"}}>No of Rooms</Text>

        </View>
        <ScrollView style={{width:"100%",height:"100%"}} contentContainerStyle={{   alignItems:"center"}} showsVerticalScrollIndicator>
        <View style={styles.roomDetails}>
            <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:10,width:"40%",height:"45%"}}>
                <Text style={{textAlign:"center"}}>Six-per</Text>
            </View>
            <TextInput style={[styles.registerInputs,{width:"35%"}]} keyboardType="number-pad" 
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>
        </View>
        <View style={styles.roomDetails}>
        <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:10,width:"40%",height:"40%"}}>
                <Text style={{textAlign:"center"}}>Four-per</Text>
            </View>
             <TextInput style={[styles.registerInputs,{width:"35%"}]} keyboardType="number-pad" 
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

        </View>
        <View style={styles.roomDetails}>
        <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:10,width:"40%",height:"40%"}}>
                <Text style={{textAlign:"center"}}>Three-per</Text>
            </View>
             <TextInput style={[styles.registerInputs,{width:"35%"}]}  keyboardType="number-pad"
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

        </View>
        <View style={styles.roomDetails}>
        <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:10,width:"40%",height:"40%"}}>
                <Text style={{textAlign:"center"}}>Three-per</Text>
            </View>
             <TextInput style={[styles.registerInputs,{width:"35%"}]}  keyboardType="number-pad"
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

        </View>
        <View style={styles.roomDetails}>
        <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:10,width:"40%",height:"40%"}}>
                <Text style={{textAlign:"center"}}>Three-per</Text>
            </View>
             <TextInput style={[styles.registerInputs,{width:"35%"}]}  keyboardType="number-pad"
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>
        </View>
        </ScrollView>
    </View>
  )
}
export default RoomDetails;