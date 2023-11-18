import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Online from "../../assets/Header/online.svg";
import Back from "../../assets/Header/back.svg";
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
export default function HeaderContact() {
    const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Contacts')}}>
      <Back />
      </TouchableWithoutFeedback>
      <View style={styles.profileImage}></View>
      <Text style={styles.profileText}> Abhi Hazra</Text>
      <LinearGradient colors={["#FFB282", "#FF958B"]} style={styles.signupLogo}>
        <Text style={styles.profileName}>NT</Text>
        <Online style={styles.online} />
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
    paddingRight: 10,
    borderColor: "#DDE5EC",
    borderWidth: 1,
    paddingLeft: 15,
  },
  signupLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: "absolute",
    right: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  online: {
    position: "absolute",
    bottom: 1,
    right: 1,
  },
  profileName: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  profileImage: {
    marginLeft: 10,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#B58787",
  },
  profileText: {
    color: "#33475B",
    fontSize: 18,
    fontWeight: "700",
    marginLeft:5,
  },
});
