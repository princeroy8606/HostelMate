import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WardenHome from '../Screens/Warden/WardenHome';

const WardenStack = () => {
    const Stack = createNativeStackNavigator()
  return (
   <Stack.Navigator>
    <Stack.Screen name='wardenHome' component={WardenHome}/>
   </Stack.Navigator>
  )
}

export default WardenStack