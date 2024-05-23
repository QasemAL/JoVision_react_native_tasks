import React , {useState} from 'react';
import {
Text,View,Button,
} from 'react-native';

const Task16 = () =>  {


    const [showName, setShowName] = useState(false);

    const toggleName = () => {
      setShowName(!showName);
    };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Button title={showName ? 'Hide' : 'Show'} onPress={toggleName} />

        {showName && <Text>Qasem Qudah</Text>}

      </View>
    );
}

export default Task16;