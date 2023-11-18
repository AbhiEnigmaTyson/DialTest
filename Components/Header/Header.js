import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Online from "../../assets/Header/online.svg"
export default function Header() {
    return (
        <View style={styles.header}>
            <LinearGradient colors={['#FFB282', '#FF958B']} style={styles.signupLogo}>
               <Text style={styles.profileName}>NT</Text>
               <Online style={styles.online}/>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        zIndex: 10,
        alignContent: "flex-end",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingBottom: 5,
        paddingRight: 10,
        borderColor:"#DDE5EC",
        borderWidth:1,
    },
    signupLogo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        position: "relative",
        alignItems:"center",
        justifyContent:"center",
    },
    online:{
        position:"absolute",
        bottom:1,
        right:1,
    },
    profileName:{
        fontSize:18,
        color:"#fff",
        fontWeight:"bold",
    }
})
