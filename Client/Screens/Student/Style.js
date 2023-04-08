import React from 'react'
import { StyleSheet,StatusBar } from 'react-native'

const Topbar = StatusBar.currentHeight

const  Style = StyleSheet.create({
    homeConatiner:{
        flex:1,
        backgroundColor:"red",
        paddingTop:Topbar,
    },
    TopContent:{
        width:"100%",
        height:"100%",
        // backgroundColor:"red"
    },
    menuServiceConatiiner:{
        width:"100%",
        height:"40%",
        // backgroundColor:"yellow"
    },
    menuContainer:{
        width:"100%",
        height:"50%",
        // backgroundColor:"blue",
        justifyContent:"flex-end",
        flexDirection:"row",
        alignItems:"center"
    },
    serviceContainer:{
        width:"100%",
        height:"50%",
        // backgroundColor:"white",
        justifyContent:"flex-start",
        flexDirection:"row",
        alignItems:"center"

    },
    menuBtn:{
        width:"80%",
        height:"75%",
        paddingLeft:40,
        backgroundColor:"white",
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    serviceBtn:{
        width:"80%",
        height:"75%",
        paddingRight:40,
        backgroundColor:"white",
        borderTopRightRadius:100,
        borderBottomRightRadius:100,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    btnImage:{
        width:"50%",
        height:"100%",
    },
    btnText:{
        fontSize:35,
        fontWeight:500,

    },
    middleContainer:{
        width:"100%",
        height:"50%",
        // backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center"
    },
    middleCover:{
        width:"90%",
        height:"85%",
        backgroundColor:"#A01C1F",
        borderRadius:35,
    },
    middleTopBtnContainer:{
        width:"100%",
        height:"40%",
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    midlleTopBtn:{
        width:"40%",
        height:"65%",
        borderRadius:19,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-around",
        shadowColor:"black",
        padding:5,
        elevation:30
    },
    middleBottomContainer:{
        width:"100%",
        height:"60%",
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        justifyContent:"center",
        alignItems:"center"
        
    },
    ContactContainer:{
        width:"90%",
        height:"70%",
        borderRadius:19,
        backgroundColor:"white",
        shadowColor:"black",
        padding:15,
        elevation:30,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    ContactCover:{
        justifyContent:"space-between"
    },
    Contact:{
        backgroundColor:"#D9D9D9",
        fontSize:20,
        fontWeight:500,
        borderRadius:15,
        padding:2,
        width:"75%",
        paddingLeft:22
    },
    phoneNumber:{
        flexDirection:"row"
    },
    complaintTop:{
        width:"100%",
        height:"5%",
        flexDirection:'row',
        justifyContent:"flex-end",
        paddingRight:15
    },
    complaintContainer:{
        width:"90%",
        height:"80%",
        backgroundColor:"white",
        borderRadius:50
    },
    history:{
        width:"25%",
        height:"80%",
        backgroundColor:"#D8CECE",
        borderRadius:60,
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:"row"
    }


})

export default Style
