import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.bottomView}>
            <Text style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>footter</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      },
      textStyle: {
        color: '#fff',
        fontSize: 18,
      },
})
