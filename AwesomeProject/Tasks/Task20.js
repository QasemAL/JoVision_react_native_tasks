import { useState } from "react";
import { View,Button,Text ,StyleSheet } from "react-native";
import MyClassPage from "../CustomClasses/Task20/MyClassPage";



const Task20 = () =>{

    const [isPressed,setIsPressed] = useState(false);

    const ToggleCustomPage = () =>{
        setIsPressed(!isPressed);
    }


    return(
        <View style={styles.container}>
        <Button title="Show" onPress={ToggleCustomPage}></Button>
        {isPressed && <MyClassPage />}
        </View>);

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });


export default Task20;