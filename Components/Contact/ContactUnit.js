import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import NameInitials from '../Common/NameInitials'
import PhoneNumberFormatter from '../Common/PhoneNumberFormatter'
import { useNavigation } from '@react-navigation/native';
export default function ContactUnit({ firstName, lastName, number }) {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('ContactDetails') }}>
            <View style={styles.contactUnit}>
                <View style={styles.contactInitials}>
                    <Text style={styles.initialText}><NameInitials firstName={firstName} lastName={lastName} /></Text>
                </View>
                <View style={styles.contactDetails}>
                    <View >
                        <Text style={styles.contactName} >{firstName} {lastName}</Text>
                    </View>
                    <View >
                        <Text style={styles.contactNumber}><PhoneNumberFormatter phoneNumber={number} /></Text>
                    </View>
                </View>
            </View>
            </TouchableWithoutFeedback >
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