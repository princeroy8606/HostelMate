
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';


const AuthNav = () => {
  return (
      <NavigationContainer>
          <AuthStack/>
      </NavigationContainer>
  )
}

export default AuthNav