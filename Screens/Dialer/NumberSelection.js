import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import * as SQLite from "expo-sqlite";
import Footer from "../../Components/Footer/Footer";
import { getCallLogs } from "../../Services/Routes/LoginRoute";
import Header from "../../Components/Header/Header";
import CallLogUnit from "../../Components/CallLogs/CallLogUnit";
import FooterLogs from "../../Components/Footer/FooterLogs";
import { StatusBar } from "expo-status-bar";
import Hamburger from "../../assets/Dialer/hamburger.svg"
import Flag from "../../assets/Dialer/flag.svg"
import Call from "../../assets/Dialer/call.svg"
import FooterKeypad from "../../Components/Footer/FooterKeypad";
export default function NumberSelection({ navigation }) {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.main}>
        <Header />
        <View style={styles.container}>
          <View style={styles.numberSelectorContainer}>
            <Text style={styles.via}>Call Via</Text>
            <Flag style={styles.flag} />
            <View style={styles.selectedNumber}>
                <Text style={styles.selectedMainText}>Customer Support</Text>
                <Text style={styles.selectedmainNumber}>+ 878 454-3453</Text>
            </View>
             <Hamburger style={styles.hamburger} />
          </View>  
          <View></View> 
        </View>
        <FooterKeypad />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
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
  dialNumber:{
     width:"100%",
     marginTop:30,
     marginBottom:20,
     alignItems:"center",
     justifyContent:"center",
  },
  numberTyped:{
   color:"#33475B",
   fontSize:38,
   fontWeight:"700",
  },
  numberSelectorContainer:{
     height:50,
     width:"100%",
     borderBottomWidth:1,
     borderBottomColor:"#DFE3EB",
     position:"relative",
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"flex-Start",
     paddingLeft:50,
  },
  via:{
    color: "#33475B",
    fontSize: 13,
    fontWeight: "700",
  },
  flag:{
    marginLeft:12,
    marginRight:12,
  },
  selectedMainText:{
    color: "#33475B",
    fontSize: 13,
    fontWeight: "700",
  },
  selectedmainNumber:{
    color: "#7C98B6",
    fontSize: 13,
    fontWeight: "700",
  },
  hamburger:{
    position:"absolute",
    right:20,
  },
  dialerPad:{
    position:"absolute",
    bottom:70,
    width:"100%",
  },
  numberContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
   marginTop:10,
   marginBottom:10,
  },
  numberUnit: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#DDE5EC",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:14,
    marginRight:14,
  },
  number: {
    color: "#33475B",
    fontSize: 20,
    fontWeight: "700",
  },
  text:{
    color: "#99ACC2",
    fontSize: 12,
    fontWeight: "700",
  },


});
