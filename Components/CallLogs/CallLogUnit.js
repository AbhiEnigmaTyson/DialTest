import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NameInitials from '../Common/NameInitials'
import PhoneNumberFormatter from '../Common/PhoneNumberFormatter'
import CallIcons from './CallIcons'
import Missed from "../../assets/CallLogs/missed.svg"
import Outgoing from "../../assets/CallLogs/outgoing.svg"
import VoiceMail from "../../assets/CallLogs/voicemail.svg"
import Incoming from "../../assets/CallLogs/incoming.svg"
export default function CallLogUnit({name,status,direction,number}) {
    const trimmedName = name.trim();
    const displayName = trimmedName !== '' ? trimmedName : 'Unknown';
    console.log("Inside")
    return (
        <View style={styles.contactUnit}>
            {/* <View style={styles.contactInitials}>
                <CallIcons status={status} direction={direction}/>
            </View> */}
            {
                direction=="outgoing" && <Outgoing />
            }
            {
                direction=="incoming" && <Incoming />
            }
            <CallIcons status={status} direction={direction}/>
            <View style={styles.contactDetails}>
                <View >
                    <Text style={styles.contactName} >{displayName}</Text>
                </View>
                <View >
                    <Text style={styles.contactNumber}><PhoneNumberFormatter phoneNumber={number}/></Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contactUnit: {
        width: "100%",
        height: 55,
        borderBottomColor: "#EAF0F6",
        borderBottomWidth: 1,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    contactInitials: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#EDEAF3",
    },
    initialText:{
        fontSize:19,
        color:"#6A78D1",
    },
    contactDetails:{
        marginLeft:15,
    },
    contactName:{
        fontSize:14,
        color:"#33475B",
        fontWeight:"700",
    },
    contactNumber:{
        fontSize:11,
        color:"#7C98B6",
        fontWeight:"400",
    },
})