import { useSelector } from "react-redux";
import { useState,useEffect,createContext,} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [userData ,setUserData]=useState(null);
    const token = useSelector((state)=> state.authReducer?.userInfo)
    useEffect(()=>{
        if(token !== null) setUserData(token.toString())
    },[token])
    if(userData !== null) AsyncStorage.setItem('UserToken',userData)

    const isLogedIn = async() =>{
        try{
            const userToken = await AsyncStorage.getItem('UserToken')
            console.dir(userToken)
            // const userToken = JSON.parse(user)
            if(userData !== null ) setUserData(userToken)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
       isLogedIn() 
    },[])


return(
    <AuthContext.Provider value={{isLogedIn,userData}}>
        {children}
    </AuthContext.Provider>
    )
}

