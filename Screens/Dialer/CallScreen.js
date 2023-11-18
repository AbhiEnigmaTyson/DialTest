import React, { useState, useEffect,useRef } from "react";
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
  Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Hamburger from "../../assets/Dialer/hamburger.svg";
import Flag from "../../assets/Dialer/flag.svg";
import EndCall from "../../assets/Dialer/endCall.svg";
import Record from "../../assets/Dialer/rec.svg";
import Mute from "../../assets/Dialer/mute.svg";
import Transfer from "../../assets/Dialer/forward.svg"
import Message from "../../assets/Dialer/message.svg"
import Tag from "../../assets/Dialer/tag.svg"
import { LinearGradient } from "expo-linear-gradient";
import { disconnectTwilioCall } from "../../Services/Twilio/twilio";
export default function CallScreen({ navigation }) {
  const [callTools,setCallTools]=useState(false)
  const handleCallEnd=()=>{
    disconnectTwilioCall()
    navigation.navigate("Dialer")
  }
  useEffect(()=>{
    setTimeout(()=>{
      setCallTools(true)
    },3000)
  },[])
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.numberSelectorContainer}>
            <Text style={styles.via}>Call Via</Text>
            <Flag style={styles.flag} />
            <View style={styles.selectedNumber}>
              <Text style={styles.selectedMainText}>Latest</Text>
              <Text style={styles.selectedmainNumber}>+18508183941</Text>
            </View>
          </View>
          <LinearGradient
            colors={["#33475B", "#516F90"]}
            style={styles.callBody}
          >
            <View style={styles.nameContainer}>
              <Text style={styles.nameValue}>Abhi Hazra</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.numberValue}>+91 900 745 3398</Text>
            </View>
            <View style={styles.clientPicView}>
              <Image source={require("../../assets/Dialer/face1.jpg")} style={styles.clientPic}/>
            </View>
            {!callTools && <CallConnecting />}
            {callTools && <CallConnect />}
            <TouchableOpacity style={styles.callCut} onPress={handleCallEnd}>
              <EndCall height={50} width={50}/>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </>
  );
}

const CallConnecting=()=>{
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.5, // Dimming
          duration: 1000, // 1 second
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1, // Glowing again
          duration: 1000, // 1 second
          useNativeDriver: false,
        }),
      ]).start(() => animate()); // Repeat the animation
    };

    animate();

    return () => {
      // Cleanup animation on component unmount
      fadeAnim.setValue(1);
    };
  }, [fadeAnim]);

  return(
    <View style={styles.callConnectingBody}>
      <Animated.Text
        style={[styles.calling, { opacity: fadeAnim }]}
      >
        Calling...
      </Animated.Text>
    </View>
  )
}
const CallConnect=()=>{
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Start the timer
    const timerId = setInterval(() => {
      setDuration((prevDuration) => prevDuration + 1);
    }, 1000); // Update the timer every second

    // Cleanup function
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };


  return(
    <View style={styles.callConnectBody}>
    <View style={styles.callDuration}>
    <Text style={styles.durationTick}>{formatTime(duration)}</Text>
 </View>
 <View style={styles.callIconsContainer}>
   <View style={styles.callIconsUnit}>
     <Mute height={45} width={45}/>
     <Text style={styles.iconText}>Mute</Text>
   </View>
   <View style={styles.callIconsUnit}>
     <Record height={45} width={45}/>
     <Text style={styles.iconText}>Hold</Text>
   </View>
   <View style={styles.callIconsUnit}>
     <Transfer height={45} width={45}/>
     <Text style={styles.iconText}>Transfer</Text>
   </View>
 </View>
 <View style={styles.callIconsContainer}>
   <View style={styles.callIconsUnit}>
     <Record height={45} width={45}/>
     <Text style={styles.iconText}>Rec</Text>
   </View>
   <View style={styles.callIconsUnit}>
     <Message height={45} width={45}/>
     <Text style={styles.iconText}>Message</Text>
   </View>
   <View style={styles.callIconsUnit}>
     <Tag height={45} width={45}/>
     <Text style={styles.iconText}>Tag</Text>
   </View>
 </View>
    </View>
  )
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
    paddingTop: 0,
  },
  callBody: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position:"relative",
  },
  numberSelectorContainer: {
    height: 52,
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
  nameContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  nameValue: {
    color: "#fff",
    fontSize: 33,
    fontWeight: "700",
  },
  numberValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
  clientPicView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  clientPic:{
   width:70,
   height:70,
   borderRadius:35,
  },
  callCut:{
    height:60,
    marginTop:30,
  },
  callDuration:{
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  durationTick:{
    color:"#99ACC2",
    fontSize:28,
    fontWeight:"400"
  },
  callIconsContainer:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:18,
    marginTop:18,
  },
  callIconsUnit:{
    justifyContent:"center",
    alignItems:"center",
    marginLeft:20,
    marginRight:20,
  },
  iconText:{
    color:"#fff",
    fontSize:13,
    fontWeight:"400",
    marginTop:5,
  },
  callConnectBody:{
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position:"relative",
  },
  callConnectingBody:{
    width: "100%",
    marginBottom:30,
    marginTop:30,
    alignItems: "center",
    justifyContent: "center",
    position:"relative",
  },
  calling:{
    color:"#99ACC2",
    fontSize:20,
    fontWeight:"400",
  }

});
