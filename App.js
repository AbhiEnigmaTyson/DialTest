import React, { useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignUp from "./Screens/Signup/SignUp";
import SignUpForm from "./Screens/Signup/SignUpForm";

// import Main from './Screens/Main/Main'
import Users from "./Screens/OnBoarding/Users";
import Workspace from "./Screens/OnBoarding/workspace";
import VerifyNumber from "./Screens/OnBoarding/verifyNumber";
import Login from "./Screens/Login/Login";
import Contacts from "./Screens/Contacts/Contacts";
import Agents from "./Screens/Contacts/Agents";
import ContactDetails from "./Screens/Contacts/ContactDetails";
import LoginEmail from "./Screens/Login/LoginEmail";
import CallLogs from "./Screens/CallLogs/CallLogs";
import MissedLogs from "./Screens/CallLogs/MIssedLogs";
import VoiceMail from "./Screens/CallLogs/VoiceMail";
import Dialer from "./Screens/Dialer/Dialer";
import CallScreen from "./Screens/Dialer/CallScreen";
import NumberSelection from "./Screens/Dialer/NumberSelection";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
       
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Agents" component={Agents} />
        <Stack.Screen name="LoginEmail" component={LoginEmail} />
        <Stack.Screen name="Contacts" component={Contacts} />

        <Stack.Screen name="SignUpForm" component={SignUpForm} />

        <Stack.Screen name="Users" component={Users} />

        <Stack.Screen name="Workspace" component={Workspace} />
        <Stack.Screen name="VerifyNumber" component={VerifyNumber} />
        <Stack.Screen name="VoiceMail" component={VoiceMail} />
        <Stack.Screen name="MissedLogs" component={MissedLogs} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
        <Stack.Screen name="CallLogs" component={CallLogs} />

        <Stack.Screen name="Dialer" component={Dialer} />

        <Stack.Screen name="NumberSelection" component={NumberSelection} />
        <Stack.Screen name="CallScreen" component={CallScreen} />
        {/*
          <Stack.Screen name="Main" component={Main} />
          */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
