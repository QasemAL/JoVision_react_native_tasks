import React,{useEffect, useState} from "react";
import {ActivityIndicator,View,Text,StyleSheet } from "react-native";

const Task18 = () =>{


    const [isloading,setisloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setisloading(false);
        }, 5000);
      }, []);


      if(isloading){
      return <ActivityIndicator/>
      }


return(
<View style ={style.containers}>
<Text>Qasem Qudah</Text>
</View>
);

}

const style = StyleSheet.create({

    containers :{flex:1,justifyContent:'center',alignContent:'center'}

});

export default Task18;