import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function FooterUnit({img,text}) {
    return (
        <View style={styles.footerUnit}>
            <Image source={require(img)} />
            <Text style={styles.footerUnitText}>{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    footerUnit: {
        width: "18%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    footerUnitImage: {
        height: 21,
        width: 25,
    },
    footerUnitText: {
        marginTop: 5,
        color: "#99ACC2",
        fontSize: 12,
        fontWeight: "700",

    },


})
