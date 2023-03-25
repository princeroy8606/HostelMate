import { useSelector } from "react-redux";
import { useState,useEffect,createContext,} from "react";
// // const [userData ,setUserData]=useState();

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const token = useSelector((state)=> state.authReducer.userInfo)

    useEffect(()=>{
        console.log(token)
    },[token])

return(
    <AuthContext.Provider value={"hello"}>
        {children}
    </AuthContext.Provider>
    )
}

