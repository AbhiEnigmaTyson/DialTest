import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import NoContacts from "../../assets/Contacts/nocontacts.svg"
import NoLog from '../../assets/CallLogs/emptyLog.svg'
export default function EmptyLog({text}) {
    return (
        <View style={styles.emptyContainer}>
        <View style={styles.emptyTextUnit}>
            <Text style={styles.emptyText}>{text}</Text>
        </View>
        <View style={styles.emptyIconUnit}>
            <NoLog height={145} width={188}/>
        </View>

        <View style={styles.emptyButton}>
            <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createText}>Start Dialing</Text>
            </TouchableOpacity>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    emptyContainer: {
        width: "100%",
        padding: 10,
    },
    emptyTextUnit: {
        width: "100%",
        alignItems: "center",
        marginTop: 70,
    },
    emptyText: {
        color: "#99ACC2",
        fontSize: 16,
        fontWeight: "700",
    },
    emptyIconUnit:{
        width:"100%",
        alignItems:"center",
        marginTop:70,
        marginBottom:50,
    },
    emptyButton:{
        width:"100%",
        alignItems:"center",
    },
    createButton:{
        width:"80%",
        height:45,
        backgroundColor:"#1EC6D8",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginTop:10,
        marginBottom:10,
    },
    createText:{
        color: "#fff",
        fontSize: 13,
        fontWeight: "700",
    },
    importButton:{
        width:"80%",
        height:45,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#D6DFE8",
        borderRadius:5,
        marginTop:10,
        marginBottom:10,
    },
    importText:{
        color: "#33475B",
        fontSize: 13,
        fontWeight: "700",
    }

})