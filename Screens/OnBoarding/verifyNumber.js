import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

import Number from "../../assets/Workspace/number.svg"

import OnBoardingText from '../../Components/OnBoardingHeader/OnBoardingHeader';


export default function VerifyNumber({navigation}) {
    const [isFocus,setIsFocus]=useState(false)
    const handleFocus=()=>{
        setIsFocus(true)
    }
    const handleCreate=()=>{
        navigation.navigate("Users")
    }
    return (
        <View style={styles.main}>
            <Number height={130} width={200} />
            <View style={styles.extra}>

            </View>
            <OnBoardingText text1={"Verify phone number"} />
            <View style={styles.extra}></View>
            <View style={styles.companyNew}> 
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    placeholderTextColor="#CBD6E2"
                    onFocus={handleFocus}
                />
            </View>
            {
                isFocus && 
                <View style={styles.companyNew}>
                    <TouchableOpacity style={styles.nextButton} onPress={handleCreate}>
                        <Text style={styles.loginButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 100,
    },
    extra: {
        marginBottom: 30,
    },
    companyNew: {
        width: "90%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        borderBottomWidth: 0,
        padding: 10,
        paddingBottom: 15,
        paddingLeft:0,
        paddingRight:0,
    },
    textColor: {
        color: "#CBD6E2",
        fontSize: 17,
    },
    companyTextBox: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: 'transparent',
        borderBottomWidth:1,
        paddingBottom:3,
        borderBottomColor:"#7CCFDC",
        outline:"none",
    },
nextButton:{
    width: "100%",
    height: 46,
    borderRadius: 5,
    backgroundColor: "#1EC6D8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
},
loginButtonText: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "bold",
},
})