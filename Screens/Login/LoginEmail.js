import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import { TextInput } from 'react-native-paper'
import AlreadyAccount from '../../Components/AlreadyAccount/AlreadyAccount'
import WelcomeText from '../../Components/WelcomeText/WelcomeText'
import { StackNavigationProp } from '@react-navigation/stack'
import { updateAgentStatus, userLogin } from '../../Services/Routes/LoginRoute'
import * as SQLite from 'expo-sqlite'
import { createTable } from '../../Services/DB/dbServices.js'
import { LinearGradient } from 'expo-linear-gradient'
import { initializeTwilio } from '../../Services/Twilio/twilio.js'

export default function LoginEmail({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = async() => {
        if (email == "") {
            ToastAndroid.show("Please Add Email", ToastAndroid.SHORT)
            return
        }
        if (password == "") {
            ToastAndroid.show('Please Add Password', ToastAndroid.SHORT)
            return
        }
        try {
            // Attempt to log in using userLogin function
            const loginResult = await userLogin({ email, password });
    
            if (loginResult) {
                 
                initializeTwilio()
                ToastAndroid.show('Sign Up Successful', ToastAndroid.SHORT);
                setEmail("");
                setPassword("");
                navigation.navigate('Dialer');
            } else {
                // If login fails, show an error message
                ToastAndroid.show('Something Went Wrong', ToastAndroid.SHORT);
            }
        } catch (error) {
            console.error('Error during login:', error);
            ToastAndroid.show('An error occurred', ToastAndroid.SHORT);
        }
    };
    
    
    useEffect(() => {
        createTable()
    }, [])

    return (
        <View style={styles.main}>
            <View style={styles.cornerUnit}>
                <LinearGradient colors={['#00F0B2', '#01DEE2']} style={styles.signupLogo}>

                </LinearGradient>
            </View>
            <View style={styles.container}>
                <WelcomeText text1={"Log in to your"} text2={"Awesome Dial account"} />
                <View style={styles.company}>
                    <TextInput
                        style={styles.inputStyles}
                        mode='outlined'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        label={<Text style={styles.labelStyle}>{"Email"}</Text>}
                        outlineStyle={{ borderColor: "#D6DFE8" }}
                        left={<TextInput.Icon icon="email" iconColor={"#99acc2"}/>}
                    />
                </View>
                <View style={styles.company}>
                    <TextInput
                        style={styles.inputStyles}
                        mode='outlined'
                        value={password}
                        secureTextEntry
                        onChangeText={text => setPassword(text)}
                        label={<Text style={styles.labelStyle}>{"Password"}</Text>}
                        outlineStyle={{ borderColor: "#D6DFE8" }}
                        left={<TextInput.Icon icon="key" iconColor="#99ACC2" />}
                    />
                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText} >Login</Text>
                    </TouchableOpacity>
                </View>
                <AlreadyAccount value={"Forget Password ?"} screen={"SignUpForm"} />
                <View style={styles.extra}></View>
                
                    <AlreadyAccount value={"Or, Create an account"} screen={"SignUpForm"} />
                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',

    },
    container: {
        width: "100%",
        position: "relative",
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,

    },
    cornerUnit: {
        position: "relative",
        height: 80,
        width: 80,
        top: 0,
        left: 0,
    },

    signupLogo: {
        width: 220,
        height: 220,
        borderRadius: 110,
        position: "relative",
        top: -120,
        left: -60
    },
    company: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    companyTextBox: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    welcomeText: {
        color: "#33475B",
        fontSize: 20,
        fontWeight: "bold",
    },
    inputStyles: {
        width: "100%",
        height: 42,
        marginBottom: 5,
        backgroundColor: "#fff",
    },
    labelStyle: {
        backgroundColor: "transparent",
        zIndex: 100000000,
        width: 20,
        fontSize: 15,
        color: "#CBD6E2",
    },
    loginButtonText: {
        color: "#FFF",
        fontSize: 13,
        fontWeight: "bold",
    },
    loginButton: {
        width: "100%",
        height: 46,
        borderRadius: 5,
        backgroundColor: "#1EC6D8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    extra: {
        marginTop: 30,
    },
    end: {
        position: "absolute",
        width:"100%",
        bottom: 0,
    }
})