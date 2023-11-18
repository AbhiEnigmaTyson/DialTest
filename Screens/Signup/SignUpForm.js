import React from 'react'
import { StyleSheet, StatusBar, Text, View, Image, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import AlreadyAccount from '../../Components/AlreadyAccount/AlreadyAccount'
import EmailWarning from '../../Components/EmailWarning/EmailWarning'
import WelcomeText from '../../Components/WelcomeText/WelcomeText'
import { LinearGradient } from 'expo-linear-gradient'

export default function SignUpForm({navigation}) {
    const handleCreate=()=>{
        navigation.navigate("Workspace")
    }

    return (
        <View style={styles.main}>
            {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" /> */}
            <View style={styles.cornerUnit}>
                <LinearGradient colors={['#00F0B2', '#01DEE2']} style={styles.signupLogo}>

                </LinearGradient>
            </View>
            <View style={styles.container}>
                <WelcomeText text1={"Create Your"} text2={"Awesome Dial account"} />
                <View style={styles.company}>
                    <TextInput
                        style={styles.inputStyles}
                        mode='outlined'
                        label={<Text style={styles.labelStyle}>{"First Name"}</Text>}
                        outlineStyle={{ borderColor: "#D6DFE8" }}
                        left={<TextInput.Icon icon="account" iconColor={"#99acc2"}/>}
                    />
                </View>
                <View style={styles.company}>
                    <TextInput
                        style={styles.inputStyles}
                        mode='outlined'
                        label={<Text style={styles.labelStyle}>{"Last Name"}</Text>}
                        outlineStyle={{ borderColor: "#D6DFE8" }}
                        left={<TextInput.Icon icon="account" iconColor={"#99acc2"}/>}
                    />
                </View>
                <View style={styles.company}>
                    <TextInput
                        style={styles.inputStyles}
                        mode='outlined'
                        label={<Text style={styles.labelStyle}>{"Email"}</Text>}
                        outlineStyle={{ borderColor: "#D6DFE8" }}
                        left={<TextInput.Icon icon="email" iconColor={"#99acc2"}/>}
                    />
                </View>
                <View style={styles.company}>
                    <TextInput
                        style={styles.inputStyles}
                        mode='outlined'
                        label={<Text style={styles.labelStyle}>{"Company"}</Text>}
                        outlineStyle={{ borderColor: "#D6DFE8" }}
                        left={<TextInput.Icon icon="account" iconColor={"#99acc2"}/>}
                    />
                </View>
                <View style={styles.company}>
                    <TextInput
                        style={styles.inputStyles}
                        mode='outlined'
                        label={<Text style={styles.labelStyle}>{"Phone"}</Text>}
                        outlineStyle={{ borderColor: "#D6DFE8" }}
                        left={<TextInput.Icon icon="phone" iconColor={"#99acc2"}/>}
                    />
                </View>
                <View style={styles.company}>
                    <TextInput
                        style={styles.inputStyles}
                        mode='outlined'
                        label={<Text style={styles.labelStyle}>{"Password"}</Text>}
                        outlineStyle={{ borderColor: "#D6DFE8" }}
                        left={<TextInput.Icon icon="key" iconColor={"#99acc2"}/>}
                    />
                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleCreate}>
                        <Text style={styles.loginButtonText}>Create an account</Text>
                    </TouchableOpacity>
                </View>

                <AlreadyAccount value={"I already have a Awesome Dial account"} screen={"LoginEmail"} />
                {/* <EmailWarning /> */}
                <View style={styles.extra}>
                    <EmailWarning />
                </View>

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
        top: -30,

    },
    extra: {
        width:"100%",
        position:"absolute",
        alignContent:"center",
        bottom:-20,
        left:30
    },

    cornerUnit: {
        position: "relative",
        height: 60,
        width: 80,
        top: 0,
        left: 0,
    },
    cornerImage: {
        width: "100%",
        height: "100%",
    },
    signupLogo: {
        width: 220,
        height: 220,
        borderRadius: 110,
        position: "relative",
        top: -130,
        left: -110,
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

})