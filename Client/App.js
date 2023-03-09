import { StatusBar, Text, View , Dimensions} from 'react-native';
import Auth from './Screens/Auth/Auth';

export default function App() {
  const StatusBarHeight = Dimensions.get('window').height-Dimensions.get('window').height;

  return (
    <View style={{flex:1}}>
      <Auth/>
    </View>
  );
}

