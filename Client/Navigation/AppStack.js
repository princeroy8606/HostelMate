import { View, Text ,StatusBar} from 'react-native'
import React, { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentStack from './StudentStack';
import WardenStack from './WardenStack';

const AppStack = () => {
  // const {userData} = useContext(AuthContext)
  // const stack = createNativeStackNavigator()
  // console.log(userData.userType)

  let userType = 'Student';
  return (
    userType === 'Student' ? 
    (<StudentStack/>):(<WardenStack/>)
    
  ) 
}

export default AppStack