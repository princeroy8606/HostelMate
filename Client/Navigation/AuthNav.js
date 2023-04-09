
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AuthNav = () => {
  // const {userData} = useContext(AuthContext)
  let userData = true


  return (
    <NavigationContainer>
      {
        !userData ? <AuthStack /> : <AppStack />
      }
    </NavigationContainer>
  )
}

export default AuthNav