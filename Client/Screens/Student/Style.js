import React from 'react'
import { StyleSheet, StatusBar, Dimensions } from 'react-native'

const Topbar = StatusBar.currentHeight
const height = Dimensions.get('window').height

const Style = StyleSheet.create({
    homeConatiner: {
        height: height,
        flex: 1,
        // paddingTop:Topbar,
    },
    TopContent: {
        width: "100%",
        height: height,
        // backgroundColor:"red"
    },
    menuServiceConatiiner: {
        width: "100%",
        height: "40%",
        // backgroundColor:"yellow"
    },
    menuContainer: {
        width: "100%",
        height: "50%",
        // backgroundColor:"blue",
        justifyContent: "flex-end",
        flexDirection: "row",
        alignItems: "center"
    },
    serviceContainer: {
        width: "100%",
        height: "50%",
        // backgroundColor:"white",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center"

    },
    menuBtn: {
        width: "80%",
        height: "75%",
        paddingLeft: 40,
        backgroundColor: "white",
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    serviceBtn: {
        width: "80%",
        height: "75%",
        paddingRight: 40,
        backgroundColor: "white",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    btnImage: {
        width: "50%",
        height: "100%",

    },
    btnText: {
        fontSize: 35,
        fontWeight: 500,
    },
    middleContainer: {
        width: "100%",
        height: "50%",
        // backgroundColor:"red",
        alignItems: "center",
        justifyContent: "center"
    },
    middleCover: {
        width: "90%",
        height: "85%",
        backgroundColor: "#A01C1F",
        borderRadius: 35,
    },
    middleTopBtnContainer: {
        width: "100%",
        height: "40%",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    midlleTopBtn: {
        width: "40%",
        height: "65%",
        borderRadius: 19,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        shadowColor: "black",
        elevation: 30,
        padding: 5,
    },
    middleBottomContainer: {
        width: "100%",
        height: "60%",
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        justifyContent: "center",
        alignItems: "center"

    },
    ContactContainer: {
        width: "90%",
        height: "70%",
        borderRadius: 19,
        backgroundColor: "white",
        shadowColor: "black",
        padding: 15,
        elevation: 30,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    ContactCover: {
        justifyContent: "space-between"
    },
    Contact: {
        backgroundColor: "#D9D9D9",
        fontSize: 20,
        fontWeight: 500,
        borderRadius: 15,
        padding: 2,
        width: "75%",
        paddingLeft: 22
    },
    phoneNumber: {
        flexDirection: "row"
    },
    complaintTop: {
        width: "100%",
        height: "5%",
        flexDirection: 'row',
        justifyContent: "flex-end",
        paddingRight: 15
    },
    complaintContainer: {
        width: "90%",
        height: "80%",
        backgroundColor: "white",
        borderRadius: 50
    },
    history: {
        width: "25%",
        height: "80%",
        backgroundColor: "#D8CECE",
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    complaintHeader: {
        width: "100%",
        height: "10%",
        // backgroundColor:"black",
        alignItems: "center",
        justifyContent: "center",
    },
    complaintCover: {
        width: "100%",
        height: "80%",
        // backgroundColor:"yellow",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    complaintBody: {
        width: "80%",
        height: "40%",
        // backgroundColor:"cyan",
    },
    complaintSubject: {
        width: "100%",
        height: "20%",
        // backgroundColor:"red",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 2,
        padding: 10
    },
    complaintContent: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
        fontSize:20
    },
    profileHeader: {
        width: "100%",
        height: "20%",
        // backgroundColor:"black",
        alignItems: "center",
        justifyContent: "center",
    },
    profilePic: {
        width: 110,
        height: 110,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#89AEB6",
        shadowColor: "black",
        elevation: 20,

    },
    profileContainer: {
        width: "100%",
        height: "65%",
        // backgroundColor:"yellow",
        justifyContent: "space-around",
        alignItems: "center",

    },
    CollegeDetails: {
        width: "85%",
        height: "20%",
        backgroundColor: "white",
        borderRadius: 20,
        flexDirection: "row",
        padding: 5,
        shadowColor: "black",
        elevation: 20,
    },
    Details: {
        width: "50%",
        height: "100%",
        justifyContent: "space-around",
        flexDirection: "column",
    },
    profileBottom: {
        width: "100%",
        // backgroundColor:"red",
        height: "15%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    logout: {
        width: "60%",
        height: "35%",
        // backgroundColor:"red",
        flexDirection: "row",
        justifyContent: "center"
    },
    menuTOP: {
        width: "100%",
        height: "20%",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowColor: "black",
        elevation: 20,
    },
    menuBottom: {
        width: "100%",
        height: "80%",
        // backgroundColor: "red",
        marginTop: 20,
        justifyContent: "space-between"
    },
    dateContainer: {
        width: "100%",
        height: "10%",
        backgroundColor: "#919698",
        borderRadius: 50,
        padding: 8
    },
    dateList: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        // backgroundColor:"yellow",
    },
    menuList: {
        width: "100%",
        height: "88%",
    },
    serviceItem: {
        width: 380, 
        height: 140,
         backgroundColor: '#CACACA', 
         marginBottom: 25,
        borderRadius: 40, 
        alignItems: "center", 
        justifyContent: "space-around",
        flexDirection: "row",
        shadowColor: "black", 
        elevation: 20,
        padding:20
    },
    OPreasonContainer:{
        width:"100%",
        height:"40%",
        padding:40
    },
    OPbottom:{
        width: "100%",
        height:800,
        // backgroundColor: "red",
        marginTop: 20,
    },
    shortInput:{
        width:150,
        height:40,
        borderRadius:10, 
        backgroundColor:"#D9D9D9",
        borderColor: "black",
        borderWidth:1,
        padding:5,
        fontSize:20,
        textAlign:"center"
    },
    requestBtn:{
        width:140,
        height:40,
        borderRadius:20,
        backgroundColor:"red",
        flexDirection:"row" ,
        justifyContent:"space-around",
        alignItems:"center",
        shadowColor: "black", 
        elevation: 20,
    }
})

export default Style
