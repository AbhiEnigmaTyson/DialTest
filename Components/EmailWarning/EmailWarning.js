import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function EmailWarning() {
    return (
        <View style={styles.companyWarning}>
            <Text style={styles.warningText}>By creating an account, you’re opting-in to receive marketing and product updates by email. You can always unsubscribe, any time. By creating an account you agree to our Terms and Privacy Policy</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    companyWarning: {
        position:"absolute",
        bottom:0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    warningText: {
        color: "#99ACC2",
        fontSize: 10,
        fontWeight: "bold",
    },


})
