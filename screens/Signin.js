import React, { useState }  from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';

import Firebase from '../config/Firebase';

 
const Signin =props=>{ 


    const {navigation} = props;
    const [email, setemail] = useState('');
   const [password, setpassword] = useState('');
 
   const handleLogin = () => {

    Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('HomePage'))
        .catch(error => alert(error))
      
}

return (
  <View style={styles.container}>
  <View style={styles.inputView} >
    <TextInput  
      style={styles.inputText}
      placeholder="Email..." 
      placeholderTextColor="#003f5c"
      onChangeText={email => setemail(email)}
      defaultValue={email}/>
  </View>
  <View style={styles.inputView} >
    <TextInput  
      style={styles.inputText}
      placeholder="Password..." 
      placeholderTextColor="#003f5c"
      onChangeText={password => setpassword(password)}
        defaultValue={password}/>
  </View>
  <TouchableOpacity >
    <Text style={styles.forgot}>Forgot Password?</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.SignInButton} 
      onPress={handleLogin}>
    <Text style={styles.loginText}>Sign In</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
    <Text
     style={styles.loginText}>Sign up</Text>
  </TouchableOpacity>
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
  forgot:{
    color:"white",
    fontSize:11,
    textAlign: "center",
  },
  inputView:{
    width:"80%",
    backgroundColor:"#9bb0bf",
    borderRadius:25,
    height: "8%",
    marginBottom:"5%",
    justifyContent:"center",
    padding:"7%",
    alignSelf: 'center',
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginText:{
    marginTop: 15,
    color:"white",
    textAlign: "center",
  },
  text:{
    height:'50%',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: "center",
      fontStyle: 'italic',
      fontFamily:"tahoma",
  },
  buttonContainer:{
    justifyContent:'space-between',
    width:'50%',
    height:'25%',
  },
  kayitText:{
   
    backgroundColor: "#FFCC80",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent:"space-around",
    fontSize: 20,
  },
  textButton:{
    fontSize:20,
    textAlign: "center",
  },
  SignInButton:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:"8%",
    alignSelf: 'center',

    marginTop:"10%",
    marginBottom:"10%"
  },


});


export default Signin;
