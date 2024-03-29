import { Dimensions, StyleSheet } from 'react-native';
import assets from '../../Components/Assets/assets';

const { width } = Dimensions.get('window')
const OtpInputWidth = Math.round(width / 6)

const styles = StyleSheet.create({
    authContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
    },
    shape: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    authimg: {
        width: "100%",
        height: "82%",
    },
    authBtnContainer: {
        width: "100%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    authBtnCover: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "black",
        borderRadius: 20,
    },
    authBtnR: {
        width: 150,
        height: 60,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
    authBtnS: {
        width: 150,
        height: 60,
        backgroundColor: "black",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center"
    },
    signUpText: {
        fontFamily: assets.FONTS.fontFamily,
        color: "white",
        fontSize: assets.FONTS.Btn,
        fontWeight: assets.FONTS.Medium,

    },
    regText: {
        fontFamily: assets.FONTS.fontFamily,
        color: "black",
        fontSize: assets.FONTS.Btn,
        fontWeight: assets.FONTS.Medium,
    },
    hostelSignUpContainer: {
        width: "100%",
        height: "100%",
    },
    registerForm: {
        width: "100%",
        height: "100%",
        position: "absolute",
        justifyContent: "space-between",
    },
    registerTop: {
        width: "100%",
        height: "35%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    registerBottom: {
        width: "100%",
        height: "65%",
        alignItems: "center",
        paddingTop: 10,
        flexDirection: "column",
        marginBottom: 12
    },
    registerIcon: {
        width: 150,
        height: 150,
        borderRadius: 50,
        overflow: "hidden",
        shadowColor: "black",
        elevation: 25,
    },
    registerInputs: {
        backgroundColor: "white",
        width: "75%",
        shadowColor: "black",
        elevation: 20,
        height: 50,
        borderRadius: 15,
        padding: 10,
        margin: 6,
        fontSize: 18
    },
    roomDetails: {
        width: "90%",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 8,
        alignItems: "center",
        // backgroundColor:"yellow"
    },
    roomTypes: {
        width: "90%",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 8,
        alignItems: "center",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 15,
        padding: 5
    },
    loginTop: {
        width: "100%",
        height: "35%",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "relative"
    },
    backBtn: {
        width: 50,
        height: 50,
        top: 45,
        left: 30,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    },
    hostelId: {
        width: "100%",
        height: "65%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
    },
    OtpInputContainer: {
        width: OtpInputWidth,
        height: OtpInputWidth,
        borderWidth: 2,
        borderColor: "red",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        opacity: .5,
        borderRadius: 15
    },
    OtpInput: {
        fontSize: assets.FONTS.Btn,
        paddingHorizontal: 15

    },
    userTypeContainer: {
        backgroundColor: "black",
        flexDirection: "row",
        width: "75%",
        shadowColor: "black",
        height: 50,
        borderRadius: 15,
        fontSize: 16,
        marginBottom: 34,
    },
    userType: {
        width: "50%",
        backgroundColor: "black",
        height: "100%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"

    }

})

export default styles