import { View, Text ,StatusBar} from 'react-native'
import React, { useContext } from 'react';
import StudentHome from '../Screens/Student/StudentHome';
import WardenHome from '../Screens/Warden/WardenHome';
import { AuthContext } from '../context/Authcontext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = () => {
  const {userData} = useContext(AuthContext)
  const stack = createNativeStackNavigator()
  console.log(userData.userType)
  return (
    <View>
      <Text>AppStack</Text>
    </View>
  ) 
}

export default AppStack