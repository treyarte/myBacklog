import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
const HomeStack = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName='Home'>
      <Screen name='Home' component={Home} options={{ title: 'GameZone' }} />
      <Screen
        name='ReviewDetails'
        component={ReviewDetails}
        options={{ title: 'Review Details' }}
      />
    </Navigator>
  );
};

export default HomeStack;
