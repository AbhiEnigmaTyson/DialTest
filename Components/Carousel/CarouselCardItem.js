import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
import { LinearGradient } from 'expo-linear-gradient'


const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.bg}>
            <View style={styles.company}>
                <LinearGradient colors={['#00F0B2', '#01DEE2']} style={styles.signupLogo}>
                    <Image source={require('../../assets/SignUp/dialImage.png')} style={styles.signupLogoIcon} />
                </LinearGradient>
            </View>
            <View style={styles.company}>
                <Text style={styles.welcomeText}>Phone system for </Text>
                <Text style={styles.welcomeText}>modern businesses</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:"#fff",
    },
    company: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    signupLogo: {
        width: 220,
        height: 220,
        borderRadius: 110,
    },
    welcomeText: {
        color: "#33475B",
        fontSize: 26,
        fontWeight: "bold",
    },
    signupLogoIcon: {
        position: "absolute",
        height: 190,
        width: 120,
        bottom: 0,
        left: 55
    },
})

export default CarouselCardItem