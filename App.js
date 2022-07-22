// import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import Router from '@/router'
import store from '@/store'

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <Router />
    </Provider>
  );
}
