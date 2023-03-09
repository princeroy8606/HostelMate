import { View, Text,ImageBackground,TouchableOpacity,Image, KeyboardAvoidingView} from 'react-native';
import styles from '../Style';
import assets from '../../../Components/Assets/assets';
import { useState } from 'react';
import HostelDetails from './HostelDetails';
import RoomDetails from './RoomDetails';
import WardensDeatils from './WardensDeatils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


const Register = () => {

    const [page ,setPage]=useState(0);
    const [formData,setFormData]=useState({
        hostelName:" ",
        hostelId:" ",
        hostelAdress:" ",
    })
    const handleNext =()=>{
            setPage(page+1)    
    }
    const handleBack =()=>{
            setPage(page-1)
    }
    const handleSubmit=()=>{
        console.log(formData)
        alert(formData.hostelName)
    }
    const Registration =()=>{
        if(page===0){
            return(
                <HostelDetails formData={formData} setFormData={setFormData}/>
            )
        }else if(page===1){
            return(
                <RoomDetails formData={formData} setFormData={setFormData}/>
            )
        }else{
            return(
                <WardensDeatils  formData={formData} setFormData={setFormData}/>
            )
        }
    }

  return (
    <View style={[styles.registerForm]}>
        <View style={styles.registerTop}>
          <ImageBackground source={assets.IMAGES.RegisterIcon} style={styles.registerIcon}/>
        </View>
          <View style={styles.registerBottom}>
           
            {
                 Registration()
             }
          
           
            <View style={{flexDirection:"row", justifyContent:"space-between",width:"80%"}}>
              {
                  page!==0&&(
                <TouchableOpacity onPress={handleBack}>
                    <View style={[styles.authBtnS,{backgroundColor:"black",height:50,flexDirection:"row",}]}>
                      <Image source={assets.IMAGES.BackIcon}/>
                      <Text style={[styles.signUpText,{marginLeft:12}]}>Back</Text>
                    </View>
                </TouchableOpacity>
                  )
              }
              {
                  page == 2 ? (  
                <TouchableOpacity onPress={handleSubmit}>
                    <View style={[styles.authBtnS,{backgroundColor:"green",height:50,}]}>
                      <Text style={[styles.signUpText,{marginLeft:12}]}>Submit</Text>
                    </View>
                </TouchableOpacity>
                  ):(
                <TouchableOpacity onPress={handleNext}>
                    <View style={[styles.authBtnS,{backgroundColor:"#BA181B",height:50,flexDirection:"row",}]}>
                      <Text style={[styles.signUpText,{marginRight:12}]}>Next</Text>
                      <Image source={assets.IMAGES.NextIcon}/>
                    </View>
                </TouchableOpacity>
                  )
              }
            </View>
          </View>
     </View>
  )
}

export default Register