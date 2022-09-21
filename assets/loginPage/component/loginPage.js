// import { TextInput } from '@react-native-material/core';
import { Button } from '@react-native-material/core';
import React from 'react';
import LottieView from 'lottie-react-native';
import { Image,SafeAreaView,StyleSheet,TextInput, Text, View } from 'react-native';
const LoginPage = (props) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={props.images}
      />
      <SafeAreaView style={styles.inptutGlobale}>
        <Text style={styles.innerText}>Email</Text>
        <TextInput
          placeholder='alphato@gmail.com'
          style={styles.input}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.inptutGlobale}>
        <Text style={styles.innerText}>Mots de Passe</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder='mots de passe'
        />
      </SafeAreaView>
      <SafeAreaView style={styles.btnGlobal}>
        <Button 
          style={styles.btn} 
          title="Login" 
          color="#659999" 
          tintColor="#FFFFFF" 
        />
      </SafeAreaView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#659999',
    borderBottomLeftRadius:90,
    borderBottomRightRadius:90,
    height:300,
    alignItems:'center'
  },
  inptutGlobale:{
    top:300,
    display:'block',
  },
  stretch: {
    position:'absolute',
    top:50,
    width: 200,
    height: 200,
  },
  input:{
    paddingLeft:10,
    marginBottom:0,
    borderRadius:10,
    backgroundColor:'lightgray',
    fontSize:20,
    height:50,
    width:340,
    margin:50,
  },
  innerText:{
    position:'absolute',
    top:19,
    left:53,
    fontSize:20,
    fontWeight:'bold',
  },
  btn:{
    padding:5,
    width:200,
    color:'#FFFFFF'
  },
  btnGlobal:{    
    top:320,
    alignItems:'center',
  }
});
export default LoginPage;