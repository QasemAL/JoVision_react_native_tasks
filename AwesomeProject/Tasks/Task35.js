import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'user_data';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        if (jsonValue != null) {
          const savedData = JSON.parse(jsonValue);
          const { name, age, country, timestamp } = savedData;
          const savedTime = new Date(timestamp);
          const currentTime = new Date();
          const timeDiff = (currentTime - savedTime) / 1000; // Difference in seconds

          if (timeDiff < 60) { // If data is less than a minute old
            setName(name);
            setAge(age);
            setCountry(country);
          }
        }
      } catch (e) {
        console.error("Error reading value from AsyncStorage", e);
      }
    };

    loadData();
  }, []);

  const handleSubmit = async () => {
    const timestamp = new Date().toISOString();
    const userData = {
      name,
      age,
      country,
      timestamp
    };

    try {
      const jsonValue = JSON.stringify(userData);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      Alert.alert('Success', 'Data saved successfully');
    } catch (e) {
      console.error("Error saving value to AsyncStorage", e);
      Alert.alert('Error', 'Failed to save data');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Task35;