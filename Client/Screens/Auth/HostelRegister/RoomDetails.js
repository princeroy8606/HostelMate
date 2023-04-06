import { View, Text, } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from '../Style';

const RoomDetails = ({formData,setFormData}) => {
  return (
    <View style={[styles.registerBottom,{height:"74%"}]}>
        <View style={styles.roomDetails}>
        <Text style={{textAlign:"center",color:"white"}}>Room Type</Text>
        <Text style={{textAlign:"center",color:"white"}}>No of Rooms</Text>
        <Text style={{textAlign:"center",color:"white"}}>RoomNo Start From</Text>
        </View>
        <ScrollView style={{width:"100%",height:"100%"}} contentContainerStyle={{   alignItems:"center"}} showsVerticalScrollIndicator>
        <View style={styles.roomTypes}>
            <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:10,width:"20%",height:"60%"}}>
                <Text style={{textAlign:"center",fontWeight:500}}>Six-per</Text>
            </View>
            <TextInput style={[styles.registerInputs,{width:"20%"}]} keyboardType="number-pad" 
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

            <TextInput style={[styles.registerInputs,{width:"20%"}]} keyboardType="number-pad" 
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>
        </View>
        <View style={styles.roomTypes}>
        <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:10,width:"20%",height:"60%"}}>
                <Text style={{textAlign:"center",fontWeight:500}}>Four-per</Text>
            </View>
             <TextInput style={[styles.registerInputs,{width:"20%"}]} keyboardType="number-pad" 
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

             <TextInput style={[styles.registerInputs,{width:"20%"}]} keyboardType="number-pad" 
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

        </View>
        <View style={styles.roomTypes}>
        <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:10,width:"20%",height:"60%"}}>
                <Text style={{textAlign:"center",fontWeight:500}}>Three-per</Text>
            </View>
             <TextInput style={[styles.registerInputs,{width:"20%"}]}  keyboardType="number-pad"
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

             <TextInput style={[styles.registerInputs,{width:"20%"}]}  keyboardType="number-pad"
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

        </View>
        <View style={styles.roomTypes}>
        <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:10,width:"20%",height:"60%"}}>
                <Text style={{textAlign:"center",fontWeight:500}}>Two-per</Text>
            </View>
             <TextInput style={[styles.registerInputs,{width:"20%"}]}  keyboardType="number-pad"
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

             <TextInput style={[styles.registerInputs,{width:"20%"}]}  keyboardType="number-pad"
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

        </View>
        <View style={styles.roomTypes}>
        <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center",borderRadius:10,width:"20%",height:"60%"}}>
                <Text style={{textAlign:"center",fontWeight:500}}>One-per</Text>
            </View>
             <TextInput style={[styles.registerInputs,{width:"20%"}]}  keyboardType="number-pad"
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>

             <TextInput style={[styles.registerInputs,{width:"20%"}]}  keyboardType="number-pad"
            onChangeText={e=>setFormData({...formData,hostelName:e})}/>
        </View>
        </ScrollView>
    </View>
  )
}
export default RoomDetails;