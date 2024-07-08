
import { useState } from 'react';
import { Image,Alert,View , Button ,StyleSheet } from 'react-native';

const Task27 = () => {
    const [selectedImage, setSelectedImage] = useState(require('../resources/warhammer1.jpg'));
  
    const images = [
      require('../resources/warhammer1.jpg'),
      require('../resources/warhammer2.jpg'),
      require('../resources/warhammer3.jpg')
    ];
  
    const showImagePicker = () => {
      Alert.alert(
        'Select Image',
        'Choose the image number (1, 2, or 3):',
        [
          { text: '1', onPress: () => setSelectedImage(images[0]) },
          { text: '2', onPress: () => setSelectedImage(images[1]) },
          { text: '3', onPress: () => setSelectedImage(images[2]) },
          { text: 'Cancel', style: 'cancel' }
        ],
        { cancelable: true }
      );
    };
  
    return (
      <View style={styles.container}>
        <Image source={selectedImage} style={styles.image} />
        <Button title="Select Image" onPress={showImagePicker} />
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
      width: 200,
      height: 200,
      marginBottom: 20,
    },
  });
  
  export default Task27;