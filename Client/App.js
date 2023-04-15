import { StatusBar, Text, View, Dimensions, StyleSheet, Platform,SafeAreaView } from 'react-native';
import AuthNav from './Navigation/AuthNav';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux'
import thunk from 'redux-thunk';
import reducers from './Redux/reducers';
import { AuthProvider } from './context/Authcontext';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default function App() {
  return (
    <Provider store={store} >
      <AuthProvider>
        <View style={{ flex: 1 }}>
          <AuthNav />
        </View>
      </AuthProvider>
    </Provider>
  );
}


