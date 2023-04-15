
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import { useSelector } from 'react-redux';



const AuthNav = () => {
  // const {userData} = useContext(AuthContext)

  let userData = true

  return (
    <NavigationContainer>
      {
        !userData ? <AuthStack /> :<AppStack />
      }
    </NavigationContainer>
  )
}

export default AuthNav