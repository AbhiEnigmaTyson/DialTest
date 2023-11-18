import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Accounts from "../../assets/Footer/account.svg"
import Contacts from "../../assets/Footer/contacts.svg"
import ContactSelected from "../../assets/Footer/contactsSelected.svg"
import Inbox from "../../assets/Footer/inbox.svg"
import KeyPads from "../../assets/Footer/keypads.svg"
import KeyPadSelected from "../../assets/Footer/keypadSelected.svg"
import Logs from "../../assets/Footer/logs.svg"
import { useNavigation } from '@react-navigation/native';
export default function FooterKeypad() {
    const navigation = useNavigation();
    return (
        <View style={styles.footer}>
            <TouchableWithoutFeedback  onPress={() => { navigation.navigate('CallLogs') }}>
                <View style={styles.footerUnit}>
                    <Logs height={22} width={25} />
                    <Text style={styles.footerUnitText}>Call Logs</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.footerUnit}>
                <Inbox height={22} width={25} />
                <Text style={styles.footerUnitText}>Inbox</Text>
            </View>
            <View style={styles.footerUnitSelected}>
                <KeyPadSelected height={22} width={25} />
                <Text style={styles.footerUnitTextSelected}>Keypad</Text>
            </View>
            <TouchableWithoutFeedback  onPress={() => { navigation.navigate('Contacts') }}>
                <View style={styles.footerUnit}>
                    <Contacts height={22} width={25} />
                    <Text style={styles.footerUnitText}>Contacts</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.footerUnit}>
                <Accounts height={22} width={25} />
                <Text style={styles.footerUnitText}>Account</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        height: 60,
        borderTopColor: "#DDE5EC",
        borderTopWidth: 1,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-around",
        zIndex: 10,
        backgroundColor: "#fff",
    },
    footerUnit: {
        width: "18%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    footerUnitSelected: {
        width: "18%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#6A78D1",
        borderBottomWidth: 3,
    },
    footerUnitImage: {
        height: 21,
        width: 25,
    },
    footerUnitText: {
        marginTop: 5,
        color: "#99ACC2",
        fontSize: 12,
        fontWeight: "700",
    },
    footerUnitTextSelected: {
        marginTop: 5,
        color: "#6A78D1",
        fontSize: 12,
        fontWeight: "700",
    },


})
