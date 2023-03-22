import { StatusBar, Text, View , Dimensions} from 'react-native';
import AuthNav from './Navigation/AuthNav';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <View style={{flex:1}}>
      <AuthNav/>
    </View>
  );
}

