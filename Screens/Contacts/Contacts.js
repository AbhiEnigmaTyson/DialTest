import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import * as SQLite from 'expo-sqlite'
import Footer from '../../Components/Footer/Footer'
import Search from "../../assets/Contacts/search.svg"
import User from "../../assets/Contacts/user.svg"
import { getContactList } from '../../Services/Routes/LoginRoute'
import Header from '../../Components/Header/Header'
import { LinearGradient } from 'expo-linear-gradient'
import ContactUnit from '../../Components/Contact/ContactUnit'
import EmptyContact from '../../Components/Contact/EmptyContact'
const db = SQLite.openDatabase('db.testDb') // returns Database object




export default function Contacts({ navigation }) {
    const [data, setData] = useState([])
    const [contactUpdate, setcontactUpdate] = useState(true)

    useEffect(() => {
        console.log(contactUpdate)
        if (!contactUpdate) return
        (async () => {
            console.log("Inside Contact UseEffect")
            let list = await getContactList()
            setData(list)
            setcontactUpdate(false)
        })()
    }, [contactUpdate])
    // useFocusEffect(
    //     React.useCallback(() => {
    //         setcontactUpdate(true)
    //         return () => {
    //             // Reset the data or perform any necessary cleanup tasks
    //             setData([]);
    //             setcontactUpdate(true); // You might need to reset the forceUpdate state
    //         };
    //     }, [])
    // );
    if (!contactUpdate) {
        return (
            <View style={styles.main}>
                <Header />

                <View style={styles.container}>

                    <View style={styles.pickerContainer}>
                        <View style={styles.picker}>
                            <View style={styles.pickerSelected}>
                                <Text style={styles.pickerSelectedText} >Contacts</Text>
                            </View>
                            <TouchableWithoutFeedback onPress={() => { navigation.navigate('Agents') }}>
                                <View style={styles.pickerUnit}>
                                    <Text style={styles.pickerUnitText} >Agents</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchBox}>
                            <TextInput
                                placeholder='Search Contacts'
                                onChange={() => console.log("Done")}
                                style={styles.searchInput}
                            />
                            <Search height={24} width={24} style={styles.contactSearch} />
                        </View>
                    </View>
                    <View style={styles.createContactUnit}>
                        <LinearGradient colors={["#00BDA5", "#00A4BD"]} style={styles.createContact}>
                            <User />
                        </LinearGradient>
                        <Text style={styles.createContactText}>Create New Contact</Text>
                    </View>

                    {
                        data && data.length > 0 && data.map((unit, index) => (
                            <TouchableWithoutFeedback key={index} onPress={()=>{navigation.navigate('ContactDetails')}}>
                                <ContactUnit firstName={unit.firstName} lastName={unit.lastName} number={unit.contactNumber} />
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>




                {/* {data && data.length <= 0 && <EmptyContact />} */}

                <Footer />
            </View>
        )
    }
    else
        return (
            <View style={styles.main}>
                <Header />
                <View style={styles.container}>
                    <View style={styles.pickerContainer}>
                        <View style={styles.picker}>
                            <View style={styles.pickerSelected}>
                                <Text style={styles.pickerSelectedText} >Contacts</Text>
                            </View>
                            <TouchableWithoutFeedback onPress={() => { navigation.navigate('Agents') }}>
                                <View style={styles.pickerUnit}>
                                    <Text style={styles.pickerUnitText} >Agents</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                </View>
                <Footer />
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
