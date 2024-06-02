import {useState } from "react";
import { StyleSheet,View,Button, Text } from "react-native";
import MyClassPage from "../CustomClasses/MyClassPage";


const Task19 = () => {
    const [isPressed, setIsPressed] = useState(false);
  
    const showMyClassPage = () => {
      setIsPressed(true);
    };
  
    return (
      <View style={styles.container}>
        <Button title="Show" onPress={showMyClassPage} />
        {isPressed && <MyClassPage />}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
  export default Task19;