import { View, Text } from 'react-native'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import TabBar from '../Screens/Student/Components/TabBar';
import SMenu from '../Screens/Student/SMenu';
import assets from '../Components/Assets/assets';


enableScreens()

const StudentStack = () => {
  const Stack = createSharedElementStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='studentHome'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='studentHome' component={TabBar} />
      <Stack.Screen name='menu' component={SMenu}
        sharedElements={() => {
          return ['image']
        }}
      />
    </Stack.Navigator>
  )
}

export default StudentStack