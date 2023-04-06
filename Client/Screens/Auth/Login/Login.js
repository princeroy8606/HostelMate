
import { View, Text,ImageBackground,TouchableOpacity,Image,SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react'
import styles from '../Style';
import assets from '../../../Components/Assets/assets';
import HostelId from './HostelId';
import SignIn from './SignIn';
import UserRegister from './UserRegister';
import {useDispatch,useSelector} from 'react-redux';
import { validatehostel ,LoginIn } from '../../../Redux/actions/Auth';


const Login = () => {

  let loginData = {
    password:null,
    email:null,
    userType:null
  }
  
  const [password,setPassword] = useState();
  const [Email,setEmail] = useState();
  const [page ,setPage]=useState(0);
  const [userType ,setUserType]= useState()
  const [hostelID,sethosteID]=useState({})
  const dispatch = useDispatch()
  const hostelStatus =  useSelector( state=> state.authReducer.hostelData)

  useEffect(()=>{
    if(hostelStatus?.hostelExist) setPage(page + 1) 
  },[hostelStatus])

  const handleNext = ()=>{
    dispatch(validatehostel(hostelID))
  }
  const handleSignIn =()=>{
    loginData.email=Email,
    loginData.password=password,
    loginData.userType=userType,
    dispatch(LoginIn(loginData))
  }

  const manageLogin =()=>{
    if(page === 0){
      return(
          <HostelId hostelID={hostelID} sethosteID={sethosteID}/>
      )
  }else if(page === 1){
      return(
          <SignIn setPassword={setPassword} setEmail={setEmail} userType={setUserType}/>
      )
  }else{
      return(
          <UserRegister/>
      )

  }
}
  const renderButton =()=>{
        switch(page){
          case 0:return(
            <TouchableOpacity onPress={handleNext}>
              <View style={[styles.authBtnS,{backgroundColor:"#BA181B",height:50,flexDirection:"row",}]}>
               <Text style={[styles.signUpText,{marginRight:12}]}>Next</Text>
               <Image source={assets.IMAGES.NextIcon}/>
             </View>
            </TouchableOpacity>
          )
          case 1:return(
            <View>
            <TouchableOpacity onPress={handleSignIn}>
              <View style={[styles.authBtnS,{backgroundColor:"#BA181B",height:50,flexDirection:"row",}]}>
                <Text style={[styles.signUpText,{marginRight:12}]}>SignIn</Text>
              </View>
            </TouchableOpacity>
            <View style={{marginTop:43,flexDirection:"row",justifyContent:"space-around"}}>
              <Text style={{color:"white"}}>Not yet registered ?</Text>
                 <TouchableOpacity onPress={()=>setPage(page+1)}>
                   <Text style={{color:"blue"}}> Register</Text>
                   </TouchableOpacity>
            </View>
            </View>
          )
          default:return null;
        }
  };



  return (
    <ImageBackground source={assets.IMAGES.bg1}style={[styles.registerForm]}>
      <View style={styles.loginTop}>
      <TouchableOpacity style={styles.backBtn} >
              <Image source={assets.IMAGES.BackIcon} />
      </TouchableOpacity>
        <View>
          <ImageBackground source={assets.IMAGES.RegisterIcon} style={styles.registerIcon}/>
        </View>
      </View>
      <View style={[styles.registerBottom]}>
        
        {
          manageLogin()
        }
        {
          renderButton()
        }
      </View>
    </ImageBackground>
  )
}

export default Login