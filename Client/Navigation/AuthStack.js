import { View, Text } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../Screens/Auth/Auth';
import Login from '../Screens/Auth/Login/Login';
import Register from '../Screens/Auth/HostelRegister/Register';
import Password from '../Screens/Auth/Login/Password';

const AuthStack = () => {
    const Stack = createNativeStackNavigator()
  return (
   <Stack.Navigator
   screenOptions={{
       headerShown:false
   }} 
   >
    <Stack.Screen name='AuthOption' component={Auth}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Register' component={Register}/>  
    <Stack.Screen name='SetPassword' component={Password}/>  
   </Stack.Navigator>
  )
}

export default AuthStack