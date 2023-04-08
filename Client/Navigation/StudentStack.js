import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBar from '../Screens/Student/Components/TabBar';

const StudentStack = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
    <Stack.Screen name='studentHome' component={TabBar}/>
   </Stack.Navigator>
  )
}

export default StudentStack