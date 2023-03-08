import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/navigation/Auth';
import MainNav from './src/navigation/MainNav';
import {NavigationContainer} from '@react-navigation/native';
import LoginProvider from './src/context/LoginProvider';
import {Provider} from "react-redux";
import {store} from "./store"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



// set up redux 


export default function App() {
  return (
      <Provider store={store}>
         <LoginProvider>
      <NavigationContainer>
      <MainNav />
      </NavigationContainer>   
      </LoginProvider> 
      </Provider>
     
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
