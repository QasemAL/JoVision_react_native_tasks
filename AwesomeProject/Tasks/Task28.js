import React from 'react';
import { View, FlatList, Image, StyleSheet, Alert, Pressable } from 'react-native';

const images = [
  require('../resources/warhammer1.jpg'),
  require('../resources/warhammer2.jpg'),
  require('../resources/warhammer3.jpg'),
  require('../resources/warhammer4.jpg'),
  require('../resources/warhammer5.jpg'),
  require('../resources/warhammer6.jpg'),
  require('../resources/warhammer7.jpg'),
  require('../resources/warhammer8.jpg'),
  require('../resources/warhammer9.jpg'),
  require('../resources/warhammer10.jpg'),
];

const Task28 = () => {

  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => handleImagePress(index)}>
      <Image source={item} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
});

export default Task28;