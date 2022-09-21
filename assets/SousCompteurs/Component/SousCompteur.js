import { Button } from '@react-native-material/core'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"; 
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import {
  Provider,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
} from "@react-native-material/core";

const SousCompteur = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <Provider>
        <LinearGradient 
            colors={['#bdc3c7', '#2c3e50']}
            style={styles.contenaire}
        > 
            <SafeAreaView style={styles.header}>
                <View>
                    <Text style={styles.teste}>Sous Compteurs</Text>
                    <Text style={styles.consomationTotal}>Consomation Avent : 5000 mA</Text>
                    <Text style={styles.consomationTotal}>Consomation Apres : 2351 mA</Text>
                </View>
                <View style={styles.icone}>
                    <Button 
                        onPress={() => setVisible(true)}
                        color="#3D4E5E" 
                        title="Add"
                        style={styles.btnAdd} 
                        trailing={props => <Icon name="plus" color="#0d50f0" size="large"  {...props} />} 
                    />
                    <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                        <DialogHeader title="Add Sous Compteur" />
                        <DialogContent>
                          <SafeAreaView style={styles.inptutGlobale}>
                            <Text style={styles.innerText}>Nom </Text>
                                <TextInput
                                  placeholder='alphato'
                                  style={styles.input}
                                />
                              </SafeAreaView>
                              <SafeAreaView style={styles.inptutGlobale}>
                                <Text style={styles.innerText}>Con/tion Avant</Text>
                                <TextInput
                                  style={styles.input}
                                  secureTextEntry
                                  placeholder='23 mA'
                                />
                              </SafeAreaView>
                              <SafeAreaView style={styles.inptutGlobale}>
                                <Text style={styles.innerText}>Con/tion Apres</Text>
                                <TextInput
                                  style={styles.input}
                                  secureTextEntry
                                  placeholder='12 mA'
                                />
                              </SafeAreaView>
                        </DialogContent>
                        <DialogActions>
                            <Button 
                                onPress={() => setVisible(false)}
                              style={styles.btn} 
                              title="Anuller" 
                              color="red" 
                              tintColor="#FFFFFF" 
                            />
                            <Button 
                                onPress={() => setVisible(false)}
                              style={{marginRight:12}} 
                              title="Login" 
                              color="#659999" 
                              tintColor="#FFFFFF" 
                            />
                        </DialogActions>
                      </Dialog>
                </View>
            </SafeAreaView>
            <ScrollView>
                <View style={styles.SousCompteru}>
                
                    <View style={styles.ListSousCompteur}>
                    <Image
                        style={styles.tinyLogo}
                        source={props.images}
                    />
                    <Text style={styles.teste}>alphato</Text>
                    <Text>Consomation Avent</Text>
                    <Text>1551 mA</Text>
                    <Text>Consomation Apres</Text>
                    <Text>522 mA</Text>
                </View>
                    <View style={styles.ListSousCompteur}>
                    <Image
                        style={styles.tinyLogo}
                        source={props.images}
                    />
                    <Text style={styles.teste}>alphato</Text>
                    <Text>Consomation Avent</Text>
                    <Text>1551 mA</Text>
                    <Text>Consomation Apres</Text>
                    <Text>522 mA</Text>
                </View>
                </View>
                <View style={styles.SousCompteru}>
                <View style={styles.ListSousCompteur}>
                    <Image
                        style={styles.tinyLogo}
                        source={props.images}
                    />
                    <Text style={styles.teste}>alphato</Text>
                    <Text>Consomation Avent</Text>
                    <Text>1551 mA</Text>
                    <Text>Consomation Apres</Text>
                    <Text>522 mA</Text>
                </View>
                <View style={styles.ListSousCompteur}>
                    <Image
                        style={styles.tinyLogo}
                        source={props.images}
                    />
                    <Text style={styles.teste}>alphato</Text>
                    <Text>Consomation Avent</Text>
                    <Text>1551 mA</Text>
                    <Text>Consomation Apres</Text>
                    <Text>522 mA</Text>
                </View>
            </View>
                <View style={styles.SousCompteru}>
                <View style={styles.ListSousCompteur}>
                    <Image
                        style={styles.tinyLogo}
                        source={props.images}
                    />
                    <Text style={styles.teste}>alphato</Text>
                    <Text>Consomation Avent</Text>
                    <Text>1551 mA</Text>
                    <Text>Consomation Apres</Text>
                    <Text>522 mA</Text>
                </View>
                <View style={styles.ListSousCompteur}>
                    <Image
                        style={styles.tinyLogo}
                        source={props.images}
                    />
                    <Text style={styles.teste}>alphato</Text>
                    <Text>Consomation Avent</Text>
                    <Text>1551 mA</Text>
                    <Text>Consomation Apres</Text>
                    <Text>522 mA</Text>
                </View>
            </View>
            </ScrollView>
        </LinearGradient>
        </Provider>
    )
}

export default SousCompteur

const styles = StyleSheet.create({
    contenaire:{
        flex:1,
    },
    tinyLogo: {        
        borderRadius:100,
        marginHorizontal:10,
        marginTop:0,
        width: 100,
        height: 100,
      },
      header:{
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        borderBottomColor:"#3D4E5E",
        borderBottomWidth:3,
        paddingBottom:6
    },
    teste:{
        fontWeight:'bold',
        fontSize:20,
        marginLeft:15,
    },
    btnAdd:{
        marginTop: 18,
        marginRight: 12
    },
    SousCompteru:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:25

    },
    ListSousCompteur:{
        // backgroundColor:'pink',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 20,
        borderRadius:10,
        width:180,
        padding:20,
        alignItems:'center',
    },
    nomUtilisateur:{
        fontWeight:'bold',
        fontSize:233
    },
    consomationTotal:{
        marginLeft:30,

    },
    inptutGlobale:{
        marginTop:12
    },
    input:{
        paddingLeft:10,
        marginBottom:0,
        borderRadius:3,
        backgroundColor:'lightgray',
        fontSize:20,
        height:30,
    },
    innerText:{
        color:'dimgray',
        fontSize:20,
        fontWeight:'bold',
      },

})
