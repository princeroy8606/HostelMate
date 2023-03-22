import { StatusBar, Text, View , Dimensions} from 'react-native';
import AuthNav from './Navigation/AuthNav';
import { Provider } from 'react-redux';
import {applyMiddleware,compose} from 'redux';
import {createStore} from 'redux'
import thunk from 'redux-thunk';
import reducers from './Redux/reducers';

const store =createStore(reducers,compose(applyMiddleware(thunk)))

export default function App() {
  return (
    <Provider store={store}>
    <View style={{flex:1}}>
      <AuthNav/>
    </View>
    </Provider>
  );
}

