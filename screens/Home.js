import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {
  const INITIAL_STATE = [
    {
      title: 'Zelda Breath of the wild',
      rating: 4,
      body: 'Lorem ipsum',
      key: 1,
    },
    { title: 'Super Mario 64', rating: 5, body: 'Lorem ipsum', key: 2 },
    { title: 'Katana Zero', rating: 3, body: 'Lorem ipsum', key: 3 },
  ];
  const [reviews, setReviews] = useState(INITIAL_STATE);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ReviewDetails', { item })}
    >
      <Text style={globalStyles.textTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Home;
