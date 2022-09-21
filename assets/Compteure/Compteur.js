import React from 'react'
import { SafeAreaView, StyleSheet, Text, Image,View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"; 


const Compteur = () => {
    return (
        <LinearGradient 
            colors={['#bdc3c7', '#2c3e50']}
            style={styles.conteurs}
        >
            <View >
                <SafeAreaView style={styles.header}>
                    <View>
                        <Text style={styles.teste}>Compteure</Text>
                        <Text style={styles.consomation}>Consomation Avent :</Text>
                        <Text style={styles.consomation}>Consomation Apres :</Text>
                    </View>
                    <View style={styles.icone}>
                        <Button 
                            color="#3D4E5E" 
                            title="Add"
                            style={styles.btnAdd} 
                            trailing={props => <Icon name="plus" color="#0d50f0" size="large"  {...props} />} 
                        />
                    </View>
                </SafeAreaView>

                <View style={styles.listeConteurs}>
                    <SafeAreaView style={styles.listeConteursFils}>
                            <Text style={styles.teste}>Compteure1</Text>
                            <Text style={styles.consomation}>Consomation Avent : 2000 mA</Text>
                            <Text style={styles.consomation}>Consomation Apres : 50 mA</Text>
                    </SafeAreaView>
                    <SafeAreaView style={styles.listeConteursFils}>
                        <Text style={styles.teste}>Compteure2</Text>
                        <Text style={styles.consomation}>Consomation Avent :2000 mA</Text>
                        <Text style={styles.consomation}>Consomation Apres :56 mA</Text>
                    </SafeAreaView>
                    <SafeAreaView style={styles.listeConteursFils}>
                        <Text style={styles.teste}>Compteure2</Text>
                        <Text style={styles.consomation}>Consomation Avent :2000 mA</Text>
                        <Text style={styles.consomation}>Consomation Apres :3 mA</Text>
                    </SafeAreaView>
                    <SafeAreaView style={styles.listeConteursFils}>
                        <Text style={styles.teste}>Compteure2</Text>
                        <Text style={styles.consomation}>Consomation Avent :2000 mA</Text>
                        <Text style={styles.consomation}>Consomation Apres :3 mA</Text>
                    </SafeAreaView>
                    
                </View>
            </View>
        </LinearGradient>
    )
}

export default Compteur

const styles = StyleSheet.create({
    conteurs:{
        flex:1,
    },
    teste:{
        fontWeight:'bold',
        fontSize:20,
    },
    header:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        borderBottomColor:"#3D4E5E",
        borderBottomWidth:5,
        paddingBottom:6
    },
    consomation:{
        marginLeft:10
    },
    listeConteurs:{
        alignItems:'center'
    },
    listeConteursFils:{
        backgroundColor:'silver',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 20,
        marginTop:12,
        paddingTop:15,
        paddingBottom:15,
        width:250,
        borderRadius:10,
        alignItems:'center'
    },
    images:{
        width:100
    },
    btnAdd:{
        marginTop: 18,
        marginRight: 12
    }
})
