import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Online from "../../assets/Contacts/online.svg"
import Offline from "../../assets/Contacts/offline.svg"
import NameInitials from '../Common/NameInitials'

export default function AgentUnit({name,agentStatus}) {
    return (
        <View style={styles.contactUnit}>
            <View style={styles.contactInitials}>
                <Text style={styles.initialText}><NameInitials firstName={name} lastName={""}/></Text>
                {
                    agentStatus && <Online style={styles.agentStatus}/> 
                }
                {
                    !agentStatus && <Offline style={styles.agentStatus}/> 
                }
            </View>
            <View style={styles.contactDetails}>
                <View >
                    <Text style={styles.contactName} >{name}</Text>
                </View>
                <View >
                    <Text style={styles.contactNumber}>{agentStatus?"Online":"Offline"}</Text>
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
        position:"relative",
    },
    agentStatus:{
     position:"absolute",
     bottom:1,
     right:3,
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