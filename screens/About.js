import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const About = ({ styles }) => {
  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
    </View>
  );
};

export default About;
