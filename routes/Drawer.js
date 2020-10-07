import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = () => {
  const { Navigator, Screen } = createDrawerNavigator();
  return (
    <Navigator initialRouteName='Home'>
      <Screen name='Home' component={HomeStack} />
      <Screen name='About' component={AboutStack} />
    </Navigator>
  );
};

export default Drawer;
