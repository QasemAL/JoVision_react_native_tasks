import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MyClassPage from '../CustomClasses/Task25/MyClassPage';

const Task25 = () => {
  const classPageRef = useRef();

  const handleTextChange = (newText) => {
    if (classPageRef.current) {
      classPageRef.current.updateText(newText);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text"
        onChangeText={handleTextChange}
      />
      <MyClassPage ref={classPageRef} />
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
  textInput: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
});

export default Task25;