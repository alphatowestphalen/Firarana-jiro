import React from 'react';
import { Stack, Button } from "@react-native-material/core";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons"; 
// import Lottier from 'lottie-react-native';
const HomePage = (props) => {
  return (
    <View style={styles.contenair}>
        <ImageBackground source={props.images} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>
              <View style={styles.btn}>
                  <Stack fill center spacing={4}>
                    <Button 
                        size="large" 
                        color="#F19622" 
                        title="Start"
                        style={{margin:41,width:250}} 
                        trailing={props => <Icon color="#0d50f0" size="large" name="send" {...props} />} 
                    />
                  </Stack>
              </View>
          </Text>
          
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  contenair:{
      flex:1,
  },
  image:{
    flex:1,
  },
  text: {
    flex:1,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#0b0500c9',
  },
  btn:{
      marginTop:650,
  },
  tebouka:{
      paddingHorizontal:8
  }

});
export default HomePage;