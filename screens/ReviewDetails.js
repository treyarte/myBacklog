import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{item.title}</Text>
      <Text>{item.rating}</Text>
      <Text>{item.body}</Text>
    </View>
  );
};

export default ReviewDetails;
