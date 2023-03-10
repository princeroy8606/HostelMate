import {StyleSheet} from 'react-native';
import assets from '../../Components/Assets/assets';


const styles= StyleSheet.create({
    authContainer:{
        width:"100%",
        height:"100%",
        backgroundColor:"cyan",
        display:"flex",
    },
    shape:{
        width:"100%",
        height:"100%",
        position:"absolute",
    },
    authimg:{
        width:"100%",
        height:"82%",
    },
    authBtnContainer:{
        width:"100%",
        height:"20%",
        justifyContent:"center",
        alignItems:"center",
    },
    authBtnCover:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"black",
        borderRadius:20,
    },
    authBtnR:{
        width:150,
        height:60,
        backgroundColor:"white",
        borderRadius:20,
        alignItems:"center",
        justifyContent:'center',
    },
    authBtnS:{
        width:150,
        height:60,
        backgroundColor:"black",
        borderRadius:20,
        alignItems:"center",
        justifyContent:'center',
    },
    signUpText:{
        fontFamily:assets.FONTS.fontFamily,
        color:"white",
        fontSize:assets.FONTS.Btn,
        fontWeight:assets.FONTS.Medium,
        
    },
    regText:{
        fontFamily:assets.FONTS.fontFamily,
        color:"black",
        fontSize:assets.FONTS.Btn,
        fontWeight:assets.FONTS.Medium,
    },
    hostelSignUpContainer:{
        width:"100%",
        height:"100%",
    },
    registerForm:{
        width:"100%",
        height:"100%",
        position:"absolute",
        justifyContent:"space-between",
        zIndex:-1,
    },
    registerTop:{
        width:"100%",
        height:"35%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"center",
    },
    registerBottom:{
        width:"100%",
        height:"65%",
        alignItems:"center",
        paddingTop:10,
        flexDirection:"column",
        marginBottom:12
    },
    registerIcon:{
        width:150,
        height:150,
        borderRadius:50,
        overflow:"hidden",
        shadowColor:"black",
        elevation:25,
    },
    registerInputs:{
        backgroundColor:"white",
        width:"75%",
        shadowColor:"black",
        elevation:20,
        height:50,
        borderRadius:15,
        padding:10,
        margin: 6,
    },
    roomDetails:{
        width:"50%",
        height:80,
        justifyContent:"space-between",
        flexDirection:"row",
        marginBottom: 8,
        alignItems:"center",
    }
})

export default styles