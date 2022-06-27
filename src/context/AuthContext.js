import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL } from "../Config";
import { useNavigation } from "@react-navigation/native";








export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);








    const login = (email, password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/api/token/`, {
            email,
            password
        },
        {
            headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            }} 
        )
        .then(res => {
            console.log(res.data);
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.access)
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo) )
            AsyncStorage.setItem('userToken', userInfo.access )

        }).catch(e => {
            console.log(`${e}`);
            //console.log(`${e.message}`);
           // console.log(`${e.response}`);
           // console.log(`${e.data}`);
           // console.log(`${e.status}`);
           // console.log(`${e.headers}`);
           // console.log(`${e.request}`);
           // console.log(`${e.config}`);
           // console.log(`${e.toJSON()}`);
           // JSON.stringify(e.response.data.errors)
           // console.log(`${e.error}`);
           // console.log(`${e.errors}`);
        });
        setIsLoading(false);
    }



    const logout = () => {
        setIsLoading(true)
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false)   
    }


    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
        let userInfo = await AsyncStorage.getItem('userInfo');
        let userToken = await AsyncStorage.getItem('userToken');
        userInfo = JSON.parse(userInfo);

        if (userInfo) {
            setUserToken(userToken);
            setUserInfo(userInfo);
        }
        setUserToken(userToken);
        setIsLoading(false);
        }
         catch(e) {
            console.log(`islogged in error ${e}`);
         }};



    useEffect(() => {
        isLoggedIn();
    },[]);



    const Register = (email, password, last_name, first_name, user_name) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/api/user/create/`, {
            email,
            password,
            last_name,
            first_name,
            user_name,
        },
        {
            headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            }} 
        )
        .then(res => {
            console.log(res.data);
        }).catch(e => {
            console.log(`${e}`);
        });
        setIsLoading(false);
    }



    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken, Register }}>
            {children}
        </AuthContext.Provider>
    )
};