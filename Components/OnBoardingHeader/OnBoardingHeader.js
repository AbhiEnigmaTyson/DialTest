import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function OnBoardingText({text1}) {
    return (
        <View style={styles.companyTextBox}>
            <Text style={styles.welcomeText}>{text1} </Text>
        </View>
    );
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
        fontSize: 26,
        fontWeight: "bold",
    },

});
