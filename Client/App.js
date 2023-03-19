import { StatusBar, Text, View , Dimensions} from 'react-native';
import AuthNav from './Navigation/AuthNav';

export default function App() {
  const StatusBarHeight = Dimensions.get('window').height-Dimensions.get('window').height;

  return (
    <View style={{flex:1}}>
      <AuthNav/>
    </View>
  );
}

