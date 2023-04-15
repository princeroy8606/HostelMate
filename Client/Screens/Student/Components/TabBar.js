import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StudentHome from '../StudentHome';
import SComplaints from '../SComplaints';
import SNotification from '../SNotification';
import SProfile from '../SProfile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import { Platform } from 'react-native';


const Tab = createBottomTabNavigator()

const TabBar = () => {
  const tabArray = [
    { route: 'Home', type: AntDesign, icon: 'home', component: StudentHome },
    { route: 'Complaint', type: MaterialIcons, icon: 'report-problem', component: SComplaints },
    { route: 'Notification', type: FontAwesome, icon: 'bullhorn', component: SNotification },
    { route: 'Profile', type: MaterialCommunityIcons, icon: 'account-circle-outline', component: SProfile },
  ]



  // const TabIconAnimation =()=>{
  //   Animated.timing(translateY,{
  //     toValue:10,
  //     duration:200,
  //     useNativeDriver:true,
  //   }
  //     ).start()
  // }


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { backgroundColor: "#B1A7A6", height: 75, borderRadius: 70, width: "85%", position: "absolute", left: 30, 
        bottom: 0 },
      }}
    >
      {
        tabArray.map((item, index) => {
          return (
            <Tab.Screen name={item.route} component={item.component} key={index}
              options={{
                tabBarBadge: item.route === 'Notification' ? '' : null,
                tabBarBadgeStyle: { backgroundColor: "#FFF500", height: 8, maxWidth: 5, borderRadius: 10, top: 7 },

                tabBarIcon: ({ color, size, focused }) => (
                  <Animated.View
                    style={focused ?
                      { padding: 8, borderRadius: 25, position: "absolute", transform: [{ translateY: -12 }], backgroundColor: "red", elevation: 10, shadowColor: "black" }
                      : { padding: 6, borderRadius: 25 }
                    }>
                    <item.type name={item.icon} size={29} color={focused ? "white" : "black"} />
                  </Animated.View>
                ),
              }}
            />
          )
        })
      }
    </Tab.Navigator>
  )
}



export default TabBar