import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import { AppLoading } from 'expo';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import 'react-native-gesture-handler';
import AppNavigator from './routes/AppNavigation';

export default function App() {
  let [fontsLoaded] = useFonts({
    'nunito-regular': Nunito_400Regular,
    'nunito-bold': Nunito_700Bold,
  });

  return !fontsLoaded ? <AppLoading /> : <AppNavigator />;
}
