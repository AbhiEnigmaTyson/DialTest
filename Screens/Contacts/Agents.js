import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback,ActivityIndicator } from 'react-native'
import * as SQLite from 'expo-sqlite'
import Footer from '../../Components/Footer/Footer'
import Search from "../../assets/Contacts/search.svg"
import User from "../../assets/Contacts/user.svg"
import { getAgents } from '../../Services/Routes/LoginRoute'
import Header from '../../Components/Header/Header'
import { LinearGradient } from 'expo-linear-gradient'
import ContactUnit from '../../Components/Contact/ContactUnit'
import EmptyContact from '../../Components/Contact/EmptyContact'
import AgentUnit from '../../Components/Contact/AgentUnit'
const db = SQLite.openDatabase('db.testDb') // returns Database object



export default function Agents({ navigation }) {
    const [data, setData] = useState([])
    const [forceUpdate, setForceUpdate] = useState(true)

    useEffect(() => {
        if (!forceUpdate) return
        (async () => {
            let list = await getAgents()
            setData(list)
            setForceUpdate(false)
        })()
    }, [])

    if (!forceUpdate) {
        return (
            <View style={styles.main}>
                <Header />
                <View style={styles.container}>
                    <View style={styles.pickerContainer}>
                        <View style={styles.picker}>
                            <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Contacts')}}>
                                <View style={styles.pickerUnit} >
                                    <Text style={styles.pickerUnitText} >Contacts</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.pickerSelected}>
                                <Text style={styles.pickerSelectedText} >Agents</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchBox}>
                            <TextInput
                                placeholder='Search Agents'
                                onChange={() => console.log("Done")}
                                style={styles.searchInput}
                            />
                            <Search height={24} width={24} style={styles.contactSearch} />
                        </View>
                    </View>
                    {
                        data && data.length > 0 && data.map((unit, index) => (
                            <AgentUnit key={index} name={unit.name} agentStatus={unit.online} />
                        ))
                    }



                    {/* <EmptyContact /> */}
                </View>
                <Footer />
            </View>
        )
    }
    else {
        return (
            <View style={styles.main}>
                <Header />
                <View style={styles.container}>
                    <View style={styles.pickerContainer}>
                        <View style={styles.picker}>
                            <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Contacts')}}>
                                <View style={styles.pickerUnit} >
                                    <Text style={styles.pickerUnitText} >Contacts</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.pickerSelected}>
                                <Text style={styles.pickerSelectedText} >Agents</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                    {/* <EmptyContact /> */}
                </View>
                <Footer />
            </View>
        )
    }
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
        flex: 1,
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        zIndex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: 50,
    },
    pickerContainer: {
        width: "100%",
        height: 45,
        backgroundColor: "#EAF0F6",
    },
    picker: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    pickerSelected: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#33475b",
        borderBottomWidth: 3,
    },
    pickerSelectedText: {
        color: "#33475B",
        fontSize: 14,
        fontWeight: "700",

    },
    pickerUnit: {
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: "100%",
    },
    pickerUnitText: {
        color: "#33475B",
        fontSize: 14,
    },
    searchContainer: {
        width: "100%",
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,
    },
    searchBox: {
        position: "relative",
        width: "100%",
        height: 45,
        borderWidth: 1,
        borderColor: "#D6DFE8",
        padding: 5,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 10,
        borderRadius: 5,
    },
    searchInput: {
        width: "80%",
        fontSize: 14,
    },
    contactSearch: {
        position: "absolute",
        right: 15,
    },
    createContactUnit: {
        width: "100%",
        height: 55,
        borderTopColor: "#EAF0F6",
        borderTopWidth: 1,
        borderBottomColor: "#EAF0F6",
        borderBottomWidth: 1,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    createContact: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    createContactText: {
        color: "#00A5BB",
        marginLeft: 14,
        fontSize: 16,
        fontWeight: "700",
    },
    loading: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }


})
