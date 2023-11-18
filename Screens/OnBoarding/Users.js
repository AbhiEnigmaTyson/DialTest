import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Myself from "../../assets/Workspace/myself.svg"
import Team from "../../assets/Workspace/team.svg"
import Selected from "../../assets/Workspace/selected.svg"
import UnSelected from "../../assets/Workspace/unselected.svg"

export default function Users({ navigation }) {
    const [selected, setSelected] = useState(0)

    const handleSelect = (id) => {
        setSelected(id)
        setTimeout(() => {
            navigation.navigate("LoginEmail")
        }, 2000)
    }
    return (
        <View style={styles.main}>
            <View style={styles.viewUnitContainer}>
                <TouchableWithoutFeedback onPress={() => handleSelect(1)}>
                    <View style={selected === 1 ? styles.userUnitSelected : styles.userUnit}>
                        <View style={styles.select}>
                            {
                                selected == 1 ?
                                    <Selected width={18} heigt={18} /> :
                                    <UnSelected width={18} heigt={18} />
                            }

                        </View>
                        <View style={styles.icon}>
                            <Myself width={50} heigt={50} />
                        </View>
                        <View style={styles.text}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>For Myself</Text>
                            </View>
                            <View style={styles.header}>
                                <Text style={styles.desc}>Get a business phone number.Make and Receive calls, manage call logs and track calls. </Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.viewUnitContainer}>
                <TouchableWithoutFeedback onPress={() => handleSelect(2)}>
                    <View style={selected === 2 ? styles.userUnitSelected : styles.userUnit}>
                        <View style={styles.select}>
                        {
                                selected == 2 ?
                                    <Selected width={18} heigt={18} /> :
                                    <UnSelected width={18} heigt={18} />
                            }
                        </View>
                        <View style={styles.icon}>
                            <Team width={50} heigt={50} />
                        </View>
                        <View style={styles.text}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>For My Team</Text>
                            </View>
                            <View style={styles.header}>
                                <Text style={styles.desc}>Collaborate with your team andmanage leads, tasks, sales and customer support, effortlessly. </Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: "center",
        justifyContent: 'center',
        position: 'relative',
        padding: 20,
        paddingTop: 20,
    },
    container: {
        width: "100%",
        position: "relative",
        paddingTop: 60,
    },
    viewUnitContainer: {
        width: "100%",
        height: 125,
        marginBottom: 20,
    },
    userUnit: {
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        borderColor: "#DFE3EB",
        borderWidth: 1,

    },
    userUnitSelected: {
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        borderColor: "#00A4BD",
        borderWidth: 1,
        backgroundColor: "#E5F5F8"
    },
    icon: {
        width: "25%",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",

    },
    iconImage: {
        width: 50,
        height: 50,
    },
    text: {
        width: "75%",
        paddingLeft: 5,
        paddingRight: 10,

    },
    header: {
        width: "100%",
        marginBottom: 5
    },
    headerText: {
        color: "#33475B",
        fontSize: 20,
        fontWeight: "700",
    },
    desc: {
        color: "#516F90",
        fontSize: 12,
        fontWeight: "400",
    },
    select: {
        position: "absolute",
        top: 10,
        right: 20,
    },
    selectIcon: {
        width: 18,
        height: 18,
    }
})