import React, { useState }  from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import Firebase from '../config/Firebase';


const SignUp = props => {

  
  const {navigation} = props;

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  handleSignUp = () => {
   
    Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('HomePage'))
        .catch(error => alert(error))
}


  return (
<View style={styles.container}>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="E-mail:" 
        placeholderTextColor="#003f5c"
        onChangeText={email => setemail(email)}
        defaultValue={email}/>
    </View>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Password:" 
        placeholderTextColor="#003f5c"
        onChangeText={password => setpassword(password)}
        defaultValue={password}/>
    </View>
     <TouchableOpacity style={styles.SignUpButton} onPress={handleSignUp}>
      <Text style={styles.devamText}>Sign Up</Text>
    </TouchableOpacity>
   
    </View>
  );
  }
  
  
  const styles = StyleSheet.create({
    container:{
      flex: 1, 
      backgroundColor:'#EF9A9A',
      paddingLeft:60,
      paddingRight:60,
      justifyContent:"center",
      alignItems:"center"
      
    },
    inputView:{
      width:"100%",
      backgroundColor:"#9bb0bf",
      height:"5%",
      marginBottom:"2%",
      justifyContent:"center",
      padding:20,
      alignSelf: 'center',  
      borderRadius:25,
      
    },
    inputText:{
      height:50,
      color:"black"
    },
    SignUpButton:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:"8%",
      alignSelf: 'center',
  
      marginTop:"10%",
      marginBottom:"10%"
    },
    devamText:{
      marginTop: "8%",
      color:"white",
      textAlign: "center",
    },
  
  });
  
  
  export default SignUp;

