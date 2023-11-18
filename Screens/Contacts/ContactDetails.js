import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../../Components/Header/Header';
import Details from '../../assets/Contacts/details.svg';
import Conversation from '../../assets/Contacts/conversation.svg';
import Cross from '../../assets/Contacts/x.svg'
import Briefcase from '../../assets/Contacts/briefcase.svg'
import Role from '../../assets/Contacts/role.svg'
import Phone from '../../assets/Contacts/phone.svg'
import Email from '../../assets/Contacts/email.svg'
import FollowUp from '../../assets/Contacts/followup.svg'
import Source from '../../assets/Contacts/source.svg'
import Hubspot from '../../assets/Contacts/hubspot.svg'
import HeaderContact from '../../Components/Header/HeaderContact';
export default function ContactDetails() {
   return (
      <View style={styles.main}>
         <HeaderContact />
         <View style={styles.detailsPicker}>
            <View style={styles.detailSelected}>
               <Details />
               <Text style={styles.detailsSelectedText}>Details</Text>
            </View>
            <View style={styles.details}>
               <Conversation />
               <Text style={styles.detailsText}>Conversation</Text>
            </View>
         </View>
         <View style={styles.profile}>
            <View style={styles.profileImageContainer}>
               <View style={styles.profileImage}></View>
            </View>
            <View style={styles.profileNameUnit}>
               <Hubspot style={styles.nameIcon}/>
               <Text style={styles.profileName}>Abhi Hazra</Text>
            </View>
            <View style={styles.profileNameUnit}>
               <Text style={styles.profileEmail}>abimicro@gmail.com</Text>
            </View>

            <View style={styles.tagSection}>
               <View style={styles.tagUnit}>
                  <Text style={styles.tagText}>Customer</Text>
                  <Cross />
               </View>
            </View>

            <View style={styles.extraHeaderSection}>
               <View style={styles.extraHeaderSelected}>
                  <Text style={styles.extraHeaderSelectedText}>Details</Text>
               </View>
               <View style={styles.extraHeader}>
                  <Text styles={styles.extraHeaderText}>Notes</Text>
               </View>
            </View>

            <View style={styles.extraSection}>
               <View style={styles.extraUnit}>
                  <View style={styles.extraTitle}>
                    <Briefcase />
                    <Text style={styles.extraTitleText}>Company</Text>
                  </View>
                  <View style={styles.extraSub}>
                    <Text style={styles.extraSubText}>Nebula</Text>
                  </View>
               </View>
               <View style={styles.extraUnit}>
                  <View style={styles.extraTitle}>
                    <Role />
                    <Text style={styles.extraTitleText}>Role</Text>
                  </View>
                  <View style={styles.extraSub}>
                    <Text style={styles.extraSubText}>--</Text>
                  </View>
               </View>
               <View style={styles.extraUnit}>
                  <View style={styles.extraTitle}>
                    <Phone />
                    <Text style={styles.extraTitleText}>Phone</Text>
                  </View>
                  <View style={styles.extraSub}>
                    <Text style={styles.extraSubText}>+919007453398</Text>
                  </View>
               </View>
               <View style={styles.extraUnit}>
                  <View style={styles.extraTitle}>
                    <Email />
                    <Text style={styles.extraTitleText}>Email</Text>
                  </View>
                  <View style={styles.extraSub}>
                    <Text style={styles.extraSubText}>abhimicro3@gmail.com</Text>
                  </View>
               </View>
               <View style={styles.extraUnit}>
                  <View style={styles.extraTitle}>
                    <FollowUp />
                    <Text style={styles.extraTitleText}>Follow Up</Text>
                  </View>
                  <View style={styles.extraSub}>
                    <Text style={styles.extraSubText}>--</Text>
                  </View>
               </View>
               <View style={styles.extraUnit}>
                  <View style={styles.extraTitle}>
                    <Source />
                    <Text style={styles.extraTitleText}>Source</Text>
                  </View>
                  <View style={styles.extraSub}>
                    <Text style={styles.extraSubText}>--</Text>
                  </View>
               </View>
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
      justifyContent: "flex-start",
      position: "relative",
      paddingTop: 50,
   },
   detailsPicker: {
      width: "100%",
      height: 50,
      paddingLeft: 15,
      paddingRight: 15,
      alignItems: "center",
      flexDirection: "row",
      borderBottomColor: "#DFE3EB",
      
      borderBottomWidth: 1,
   },
   detailSelected: {
      width: 100,
      height: 36,
      borderRadius: 30,
      backgroundColor: "#1EC6D8",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
   },
   detailsSelectedText: {
      color: "#fff",
      fontSize: 12,
      marginLeft: 8,
   },
   details: {
      width: 128,
      height: 36,
      borderRadius: 30,
      backgroundColor: "#fff",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderBlockColor: '#33475b',
      marginLeft: 10,
   },
   detailsText: {
      color: "#33475B",
      fontSize: 12,
      fontWeight:"700",
      marginLeft: 8,
   },
   profile: {
      width: "100%",
      paddingTop:50,
   },
   profileImageContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginBottom:20,
   },
   profileImage: {
      height: 100,
      width: 100,
      borderRadius: 50,
      backgroundColor: "#B58787",
   },
   profileNameUnit: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
   },
   nameIcon:{
      position:"absolute",
      left:80,
   },
   profileName: {
      color: "#33475b",
      fontSize: 22,
      fontWeight: "700",
   },
   profileEmail: {
      color: "#33475b",
      fontSize: 16,
      fontWeight: "400",
   },
   tagSection: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 15,
      marginBottom: 15,
   },
   tagUnit: {
      borderWidth: 1,
      borderColor: "#00D1B6",
      backgroundColor: "#DFF9F6",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      marginRight: 5,
      marginLeft: 5,
   },
   tagText: {
      color: "#05D2B7",
      marginRight: 5,
   },
   extraHeaderSection: {
      width: "100%",
      height: 35,
      borderBottomWidth: 1,
      borderBottomColor: "#D6DFE8",
      flexDirection: "row",
   },
   extraHeaderSelected: {
      width: "50%",
      height: 35,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderBottomWidth: 2,
      borderBottomColor: "#3345b",
   },
   extraHeaderSelectedText: {
      color: "#33475b",
      fontSize: 14,
      fontWeight: "700",
   },
   extraHeader: {
      width: "50%",
      height: 35,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
   },
   extraHeaderSelectedText: {
      color: "#33475b",
      fontSize: 14,
      fontWeight: "400",
   },

   extraSection:{
      width:"100%",
      paddingTop:25,
   },
   extraUnit:{
     width:"100%",
     padding:5,
     flexDirection:"row",
   },
   extraTitle:{
      width:"40%",
      flexDirection:"row",
      paddingLeft:20,
      alignItems:"flex-start",
      justifyContent:"flex-start"
   },
   extraTitleText:{
      marginLeft:10,
      color:"#496583",
      fontSize:15,
      fontWeight:"700",
   },
   extraSub:{
      width:"60%",
      alignItems:"center",
      justifyContent:"flex-start",
   },
   extraSubText:{
      marginLeft:5,
      color:"#7692A5",
      fontSize:15,
      fontWeight:"400",
   },
});
