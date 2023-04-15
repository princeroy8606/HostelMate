import { View, Text } from 'react-native'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import TabBar from '../Screens/Student/Components/TabBar';
import SMenu from '../Screens/Student/SMenu';
import Sservice from '../Screens/Student/Sservice';
import Soutpass from '../Screens/Student/Soutpass';
import Sleave from '../Screens/Student/Sleave';


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
        options={()=>({
          transitionSpec:{
              open:{animation:"spring" ,config:{duration:500}},
              close:{animation:"spring" ,config:{duration:100}}
          },
          cardStyleInterpolator:({ current:{progress}})=>{
            return{
              cardStyle:{
                opacity:progress,
              }
            }
          },
        })}
        sharedElements={() => {
          return ['image']
        }}
      />
      <Stack.Screen name='service' component={Sservice}
        options={()=>({
          transitionSpec:{
              open:{animation:"spring" ,config:{duration:500}},
              close:{animation:"spring" ,config:{duration:100}}
          },
          cardStyleInterpolator:({ current:{progress}})=>{
            return{
              cardStyle:{
                opacity:progress,
              }
            }
          },
        })}
        sharedElements={() => {
          return ['service']
        }}
      />r
      <Stack.Screen name='Outpass' component={Soutpass} />
      <Stack.Screen name='Leave' component={Sleave} />
    </Stack.Navigator>
  )
}

export default StudentStack