import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchIpNonBlocking = () => {
    fetch('https://api.ipify.org')
      .then(response => response.text())
      .then(data => {
        setIp(data);
      })
      .catch(error => {
        console.error('Error fetching IP:', error);
      });
  };

  const fetchIpBlocking = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.ipify.org');
      const data = await response.text();
      setIp(data);
    } catch (error) {
      console.error('Error fetching IP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Fetch IP (Non-Blocking)"
        onPress={fetchIpNonBlocking}
        disabled={loading}
      />
      <Button
        title="Fetch IP (Blocking)"
        onPress={fetchIpBlocking}
        disabled={loading}
      />
      <Text>Your IP: {ip ? ip : 'Not fetched yet'}</Text>
      {loading && <Text>Loading...</Text>}
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
});

export default Task26;