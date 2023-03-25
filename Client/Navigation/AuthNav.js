
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';


const AuthNav = () => {
  const context = useContext(AuthContext)

  return (
      <NavigationContainer>
          <AuthStack/>
          {/* <AppStack/> */}
      </NavigationContainer>
  )
}

export default AuthNav