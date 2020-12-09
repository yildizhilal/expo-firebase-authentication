import React, { useState }  from 'react';
import {View, Text, StyleSheet,Button,TextInput, ImageBackground,TouchableOpacity} from 'react-native';

 
const HomePage=props=>{ 


return (
  <View style={styles.container}>
  <Text>Welcome Home Page...</Text>
</View>
);

}


const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor:'#EF9A9A',
    justifyContent:"center",
    alignItems:"center"
  },
  
  text:{
    height:'50%',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: "center",
      fontStyle: 'italic',
      fontFamily:"tahoma",
  },



});


export default HomePage;
