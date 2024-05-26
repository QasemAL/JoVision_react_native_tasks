import React , {useState} from 'react';
import {
Text,View,Button,StyleSheet
} from 'react-native';

const Task16 = () =>  {


    const [showName, setShowName] = useState(false);

    const toggleName = () => {
      setShowName(!showName);
    };
    //  <Button title={showName ? 'Hide' : 'Show'} onPress={toggleName} />
    return (
      <View style={style.containers}>
        
        <Button title= "Show" onPress={toggleName} />

        {showName && <Text>Qasem Qudah</Text>}

      </View>
    );
}

const style = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task16;