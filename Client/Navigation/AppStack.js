import { View, Text, StatusBar ,Platform} from 'react-native'
import React, { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import StudentStack from './StudentStack';
import WardenStack from './WardenStack';
import { useSelector } from 'react-redux';

const AppStack = () => {
  const {userData} = useContext(AuthContext)
  // const userType = useSelector((state)=> state.authReducer?.userInfo?.userType)
  // console.log(userType)
  let userType  = 'Student'

  return (
    userType === 'Student' ?
    // {
    //   Platform. === 'android' ? (<StatusBar/>):(<SafeAreaView style={{backgroundColor:"black"}}/>)
    // }
      (<StudentStack />) : (<WardenStack />)

  )
}

export default AppStack