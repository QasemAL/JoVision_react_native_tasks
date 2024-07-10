import React, { useRef, useState } from 'react';
import { View, FlatList, Image, StyleSheet, Alert, Pressable, Button, Modal, TextInput, TouchableOpacity, Text } from 'react-native';

const initialImages = [
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

const Task30 = () => {
  const flatListRef = useRef(null);
  const [images, setImages] = useState(initialImages);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const promptForIndex = () => {
    setModalVisible(true);
  };

  const handleScrollToIndex = () => {
    const index = parseInt(inputValue, 10);
    if (!isNaN(index) && index >= 0 && index < images.length) {
      flatListRef.current.scrollToIndex({ animated: true, index });
      setModalVisible(false);
      setInputValue('');
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid numeric index.');
    }
  };

  const removeItem = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.imageContainer}>
      <Pressable onPress={() => handleImagePress(index)}>
        <Image source={item} style={styles.image} />
      </Pressable>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(index)}>
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Scroll to Image Index" onPress={promptForIndex} />
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter index"
              value={inputValue}
              onChangeText={setInputValue}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleScrollToIndex}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  imageContainer: {
    position: 'relative',
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: '#FF6347',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Task30;