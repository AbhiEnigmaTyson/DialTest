import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function WelcomeText({text1,text2}) {
    return (
        <View style={styles.companyTextBox}>
            <Text style={styles.welcomeText}>{text1} </Text>
            <Text style={styles.welcomeText}>{text2}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    companyTextBox: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:20,
    },
    welcomeText: {
        color: "#33475B",
        fontSize: 20,
        fontWeight: "bold",
    },

})
