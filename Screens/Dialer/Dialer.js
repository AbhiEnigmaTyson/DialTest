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
import * as Clipboard from "expo-clipboard";
import * as SQLite from "expo-sqlite";
import Footer from "../../Components/Footer/Footer";
import {
  getCallLogs,
  updateAgentStatus,
  makeOutgoingCall,
  fetchContactByNumber,
} from "../../Services/Routes/LoginRoute";
import Header from "../../Components/Header/Header";
import CallLogUnit from "../../Components/CallLogs/CallLogUnit";
import FooterLogs from "../../Components/Footer/FooterLogs";
import { StatusBar } from "expo-status-bar";
import Hamburger from "../../assets/Dialer/hamburger.svg";
import Flag from "../../assets/Dialer/flag.svg";
import Cross from "../../assets/Dialer/cross.svg";
import Call from "../../assets/Dialer/call.svg";
import Backspace from "../../assets/Dialer/backspace.svg";
import FooterKeypad from "../../Components/Footer/FooterKeypad";
import { useNavigation } from "@react-navigation/native";
import { makeTwilioCall } from "../../Services/Twilio/twilio";
export default function Dialer({ navigation }) {
  const [dialSelect, setDialSelect] = useState(true);
  useEffect(() => {
    (async () => {
      //let device_instance=await updateAgentStatus()
      //setInstance(device_instance)
    })();
  }, []);
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.main}>
        <Header />
        {dialSelect && <DialSection setDialSelect={setDialSelect} />}
        {!dialSelect && <NumberSelect setDialSelect={setDialSelect} />}
        <FooterKeypad />
      </View>
    </>
  );
}
const DialSection = ({ setDialSelect }) => {
  const [number, setNumber] = useState("");
  const [nameVisible, setNameVisible] = useState(false);
  const [instance, setInstance] = useState(null);
  const [contactName, setContactName] = useState("");
  const [showPasteText, setShowPasteText] = useState(false);

  const typeNumber = (pressedNumber) => {
    setNumber((prevNumber) => prevNumber + pressedNumber);
    if (number == "900745339") setNameVisible(true);
  };
  const handleLongPress = async () => {
    const content = await Clipboard.getStringAsync();
    setNumber("");
    setShowPasteText(true);
  };

  const handlePasteTextPress = async () => {
    const content = await Clipboard.getStringAsync();
    setNumber(content);
    setShowPasteText(false);
  };
  let navigation = useNavigation();
  const handleCall = () => {
    //let phoneNumber = `+${"91"}${number}`
    //let device_instance = instance
    //let call_promise = makeOutgoingCall(
    //    device_instance,
    //    phoneNumber,
    //)
    //call_promise.then((res) => {
    //    console.log(res)
    //})
    makeTwilioCall()
    navigation.navigate("CallScreen");
  };
  const handleBackspace = () => {
    setNumber((prevNumber) => prevNumber.slice(0, -1));
  };

  const handleBackspaceLongPress = () => {
    setNumber("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.numberSelectorContainer}>
        <Text style={styles.via}>Call Via</Text>
        <Flag style={styles.flag} />
        <View style={styles.selectedNumber}>
          <Text style={styles.selectedMainText}>Latest</Text>
          <Text style={styles.selectedmainNumber}>+18508183941</Text>
        </View>

        <TouchableOpacity
          style={styles.hamburger}
          onPress={() => setDialSelect(false)}
        >
          <Hamburger />
        </TouchableOpacity>
      </View>
      <View style={styles.numberSection}>
        {nameVisible && <Text style={styles.callerName}>Abhi Hazra</Text>}
        <TouchableWithoutFeedback onLongPress={handleLongPress} style={styles.numberTypedContainer}>
        <View>
            {showPasteText && ( 
              <TouchableOpacity onPress={handlePasteTextPress}>
                <Text style={styles.pasteText}>Paste</Text>
              </TouchableOpacity>
            )}
            <Text style={styles.numberTyped}>{number}</Text>
          </View>
        </TouchableWithoutFeedback>
        
      </View>
      <View style={styles.dialerPad}>
        <View style={styles.numberContainer}>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("1")}
          >
            <Text style={styles.number}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("2")}
          >
            <Text style={styles.number}>2</Text>
            <Text style={styles.text}>ABC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("3")}
          >
            <Text style={styles.number}>3</Text>
            <Text style={styles.text}>DEF</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberContainer}>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("4")}
          >
            <Text style={styles.number}>4</Text>
            <Text style={styles.text}>GHI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("5")}
          >
            <Text style={styles.number}>5</Text>
            <Text style={styles.text}>JKL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("6")}
          >
            <Text style={styles.number}>6</Text>
            <Text style={styles.text}>MNO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberContainer}>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("7")}
          >
            <Text style={styles.number}>7</Text>
            <Text style={styles.text}>PQRS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("8")}
          >
            <Text style={styles.number}>8</Text>
            <Text style={styles.text}>TUV</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("9")}
          >
            <Text style={styles.number}>9</Text>
            <Text style={styles.text}>WXYZ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberContainer}>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("*")}
          >
            <Text style={styles.number}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("0")}
          >
            <Text style={styles.number}>0</Text>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numberUnit}
            onPress={() => typeNumber("#")}
          >
            <Text style={styles.number}>#</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.numberContainer}>
          <TouchableOpacity onPress={handleCall}>
            <Call height={60} width={60} />
          </TouchableOpacity>
          {number.length > 0 && (
            <TouchableOpacity
              onPress={handleBackspace}
              onLongPress={handleBackspaceLongPress}
              style={styles.backspace}
            >
              <Backspace height={60} width={60} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
const NumberSelect = ({ setDialSelect }) => {
  return (
    <View style={styles.container}>
      <View style={styles.numberSelectorHeader}>
        <Text style={styles.numberSelectorHeaderText}>Call Via</Text>
        <View style={styles.cross}>
          <TouchableOpacity onPress={() => setDialSelect(true)}>
            <Cross />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.numberDropContainer}>
        <View style={styles.numberDropUnits}>
          <Flag />
          <View style={styles.callingNumberUnit}>
            <Text style={styles.callingNumberName}>Latest</Text>
            <Text style={styles.callingNumber}>+18508183941</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
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
  numberSelectorContainer: {
    height: 50,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#DFE3EB",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-Start",
    paddingLeft: 50,
  },
  via: {
    color: "#33475B",
    fontSize: 13,
    fontWeight: "700",
  },
  flag: {
    marginLeft: 12,
    marginRight: 12,
  },
  selectedMainText: {
    color: "#33475B",
    fontSize: 13,
    fontWeight: "700",
  },
  selectedmainNumber: {
    color: "#7C98B6",
    fontSize: 13,
    fontWeight: "700",
  },
  hamburger: {
    position: "absolute",
    right: 20,
  },
  dialerPad: {
    position: "absolute",
    bottom: 70,
    width: "100%",
  },
  numberContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    position: "relative",
  },
  backspace: {
    position: "absolute",
    right: 65,
    top: 0,
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
    marginLeft: 14,
    marginRight: 14,
  },
  number: {
    color: "#33475B",
    fontSize: 20,
    fontWeight: "700",
  },
  text: {
    color: "#99ACC2",
    fontSize: 12,
    fontWeight: "700",
  },
  numberSection: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  numberTypedContainer:{
    width:"100%",
    minHeight:30,
  },
  numberTyped: {
    color: "#33475B",
    fontSize: 35,
    fontWeight: "700",
  },
  callerName: {
    color: "#33475B",
    fontSize: 30,
    fontWeight: "700",
  },
  numberSelectorHeader: {
    width: "100%",
    position: "relative",
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  numberSelectorHeaderText: {
    color: "#33475B",
    fontSize: 13,
    fontWeight: "700",
  },
  numberDropContainer: {
    width: "100%",
    position: "relative",
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  numberDropUnits: {
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderColor: "#94C7FA",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#E2EFFD",
  },
  callingNumberUnit: {
    marginLeft: 20,
  },
  callingNumberName: {
    color: "#334760",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  callingNumber: {
    color: "#7C98B6",
    fontSize: 13,
    fontWeight: "400",
  },
  cross: {
    position: "absolute",
    right: 30,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#EAF0F6",
    alignItems: "center",
    justifyContent: "center",
  },
  pasteText: {
    color: "#33475B", // Adjust the color to match numbertyped
    fontSize: 16,
    fontWeight: "400", // Change the font weight to 400
    marginBottom: 8,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#DDE5EC", // Adjust the color to match numbertyped
    borderRadius: 10, // To make it square-like, set border radius to half of height
    paddingLeft:15,
    paddingRight:15,
    paddingTop:7,
    paddingBottom:7, // Add some padding for better appearance
  },
});
