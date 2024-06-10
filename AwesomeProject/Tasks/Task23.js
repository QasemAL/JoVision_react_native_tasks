import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import MyClassPage from '../CustomClasses/Task23/MyClassPage';

const Task23 = () => {
  const [showMyClassPage, setShowMyClassPage] = useState(false);
  const [text, setText] = useState('');

  const toggleMyClassPage = () => {
    setShowMyClassPage(!showMyClassPage);
  };

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleMyClassPage} />
      {showMyClassPage && <MyClassPage onTextChange={handleTextChange} />}
      <Text>text from MyClassPage = {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task23;
