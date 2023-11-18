import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import DialIcon from "../../assets/Login/dial-icon.svg"
import { LinearGradient } from 'expo-linear-gradient'

export default function Login({navigation}) {
    const handleCreate=()=>{
       navigation.navigate("SignUp")
    }
    const handleLogin=()=>{
        navigation.navigate("LoginEmail")
    }
    return (
        <View style={styles.main}>
            <View style={styles.cornerUnit}>
                <LinearGradient colors={['#00F0B2', '#01DEE2']} style={styles.signupLogo}>

                </LinearGradient>
            </View>
            <View style={styles.container}>
                <View style={styles.company}>
                    
                        <DialIcon height={70} width={70} />
                    
                    <Text style={styles.companyText}>Welcome Back !</Text>
                </View>
                <View style={styles.company}>
                    <Image source={require('../../assets/Login/loginImage.jpg')} style={styles.loginImage} />
                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Login with your email</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginGoogle}>
                        <Image source={require('../../assets/SignUp/logo.png')} style={styles.googleIcon} />
                        <Text>Sign up with Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.extra}>

                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginOther} onPress={handleCreate}>
                        <Text>Or, Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop:30,
    },
    container: {
        width: "100%",
        position: "relative",
        paddingLeft: 30,
        paddingRight: 30,
    },
    company: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    companyLogo: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    logoIcon: {
        width: 60,
        height: 60,
    },
    companyText: {
        color: "#33475B",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "bold",
        marginBottom:20,
        marginTop:10,
    },
    loginImage: {
        width: 200,
        height: 200,
    },
    loginButton: {
        width: "100%",
        height: 46,
        borderRadius: 5,
        backgroundColor: "#1EC6D8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    loginButtonText: {
        color: "#FFF",
        fontSize: 13,
        fontWeight: "bold",
    },
    loginGoogle: {
        width: "100%",
        position: "relative",
        height: 46,
        borderRadius: 5,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#D6DFE8",
        marginTop: 10,
        marginBottom: 10,
    },
    googleIcon: {
        position: "absolute",
        left: 15,
    },
    loginOther: {
        width: "100%",
        height: 46,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    corner: {
        position: "absolute",
        height: 175,
        width: 175,
        borderRadius: 85,

        top: -40,
        left: -40,

    },
    cornerUnit: {
        position: "absolute",
        height: 80,
        width: 80,
        backgroundColor: "linear-gradient(136deg, #00F0B2 15.82%, #01DEE2 85.18%)",
        top: 0,
        left: 0,
    },
   extra:{
    marginBottom:30,
   },
    signupLogo: {
        width: 220,
        height: 220,
        borderRadius: 110,
        position: "relative",
        top:-75,
        left:-85,
    },
})
