import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const AboutStack = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName='About'>
      <Screen name='About' component={About} options={{ title: 'About' }} />
    </Navigator>
  );
};

export default AboutStack;
