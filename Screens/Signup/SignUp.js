import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import AlreadyAccount from "../../Components/AlreadyAccount/AlreadyAccount";
import EmailWarning from "../../Components/EmailWarning/EmailWarning";
import { LinearGradient } from "expo-linear-gradient";
import CarouselCards from "../../Components/Carousel/CarouselCards";
import { StatusBar } from "expo-status-bar";

export default function SignUp({ navigation }) {
  const [mainHeight, setMainHeight] = useState(0);
  let handleSignUp = () => {
    navigation.navigate("SignUpForm");
  };
  useEffect(() => {
    const getMainHeight = () => {
        const { height } = Dimensions.get('window');
        const statusBarHeight = StatusBar.currentHeight || 0;
        setMainHeight(height - statusBarHeight);
    };
    getMainHeight();
}, []);
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true}/>
      <View style={[styles.main, { height: mainHeight }]}>
        <View style={styles.container}>
          <CarouselCards />
          <View style={styles.company}>
            <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
              <Text style={styles.loginButtonText}>Create an account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.company}>
            <TouchableOpacity style={styles.loginGoogle}>
              <Image
                source={require("../../assets/SignUp/logo.png")}
                style={styles.googleIcon}
              />
              <Text>Sign up with Google</Text>
            </TouchableOpacity>
          </View>
          <AlreadyAccount
            value={"I already have a Awesome Dial account"}
            screen={"LoginEmail"}
          />
          {/* <View style={styles.companyWarning}>
                    <Text style={styles.warningText}>By creating an account, you’re opting-in to receive marketing and product updates by email. You can always unsubscribe, any time. By creating an account you agree to our Terms and Privacy Policy</Text>
                </View> */}
          <EmailWarning />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
    padding: 20,
    paddingTop: 10,
    borderWidth: 1,
    borderColor:"red",
    borderWidth:1,
    width: width, // Set the width dynamically
   
  },
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
    paddingTop: 60,
  },
  signupLogo: {
    width: 220,
    height: 220,
    borderRadius: 110,
  },
  welcomeText: {
    color: "#33475B",
    fontSize: 26,
    fontWeight: "bold",
  },
  warningText: {
    color: "#99ACC2",
    fontSize: 10,
    fontWeight: "bold",
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "bold",
  },
  signupLogoIcon: {
    position: "absolute",
    height: 190,
    width: 120,
    bottom: 0,
    left: 55,
  },
  signupBack: {
    position: "absolute",
    width: 265,
    height: 265,
    borderRadius: 132,
    backgroundColor: "linear-gradient(136deg, #00F0B2 15.82%, #01DEE2 85.18%)",
  },
  space: {
    marginBottom: 30,
  },
  company: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  extra: {
    marginTop: 20,
  },
  companyWarning: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  companyLogo: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    width: 60,
    height: 60,
  },
  companyText: {
    color: "#33475B",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  loginImage: {
    width: 200,
    height: 200,
  },
  loginButton: {
    width: "100%",
    height: 46,
    borderRadius: 5,
    backgroundColor: "#1EC6D8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  loginGoogle: {
    width: "100%",
    position: "relative",
    height: 46,
    borderRadius: 5,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D6DFE8",
    marginTop: 10,
    marginBottom: 10,
  },
  googleIcon: {
    position: "absolute",
    left: 15,
  },
  loginOther: {
    width: "100%",
    height: 46,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  already: {
    color: "#33475B",
    fontSize: 13,
    fontWeight: "bold",
  },
});
