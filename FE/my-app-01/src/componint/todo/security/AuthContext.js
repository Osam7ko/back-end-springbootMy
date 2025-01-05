
//work code

/*
import { createContext, useState,useContext } from "react";
import { executeBasicAuth } from "../api/AuthApiService";
import { apiClint } from "../api/ApiClient";

// create a context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    const [isAuth , setAuth]= useState(false)

    const[username,setUsername]= useState(null)

    const [token, setToken] = useState(null)

    function login(username,password){
        if(username === 'osama' && password ==='123'){
            console.log('Success')
            setUsername(username)
            setAuth(true)
            return true
        }else{
            console.log('Failed')
            setAuth(false)
            setUsername(null)
            return false
        }
    }
    // async function login(username,password){

    //     const baToken = 'Basic ' + window.btoa( username + ":" + password )

    //     try{


    //         const response = await executeBasicAuth(token);
    //         if (response.status === 200) {
    //             console.log('Login Successful:', response.data);
    //         }
    //     } catch (err) {
    //         console.error('Login Failed:', err.response);
            

    //     //     const response = await executeBasicAuth(baToken)
            
    //     //     if(response.status==200){
    //     //         setAuth(true)
    //     //         setUsername(username)
    //     //         setToken(baToken)

    //     //         apiClint.interceptors.request.use(
    //     //             (config) => {
    //     //                 config.headers.Authorization= baToken
    //     //                 return config
    //     //             }
    //     //         )
    //     //         return true
    //     //     }else{
    //     //         logout()
    //     //         return false
    //     //     }
    //     // }catch(error){
    //     //     logout()
    //     //     return false
    //     }
    // }
    function logout(){
        setAuth(false)
        setToken(null)
        setUsername(null)
    }

    return(
        <AuthContext.Provider value={{isAuth,login,logout,username,token}}>
            {children}
        </AuthContext.Provider>
    )
}
    */

// secund change 

/*
import { createContext, useState, useContext } from "react";
import { executeBasicAuth } from "../api/AuthApiService";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isAuth, setAuth] = useState(false);
    const [username, setUsername] = useState(null);

    async function login(username, password) {
        try {
            const response = await executeBasicAuth(username, password);
            if (response.status === 200) {
                console.log("Login successful:", response.data);
                setUsername(username);
                setAuth(true);
                return true;
            } else {
                console.log("Login failed:", response);
                setAuth(false);
                return false;
            }
        } catch (error) {
            console.log("Error during login:", error);
            setAuth(false);
            return false;
        }
    }

    function logout() {
        setAuth(false);
        setUsername(null);
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout, username }}>
            {children}
        </AuthContext.Provider>
    );
}*/


import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isAuth, setAuth] = useState(false);
    const [username, setUsername] = useState(null);

    // Login function that makes a POST request to your backend API
    async function login(username, password) {
        try {
            const response = await fetch('http://localhost:8080/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                credentials: 'include', // for cookies
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);
                setUsername(username);
                setAuth(true);
                return true;
            } else {
                console.log("Login failed:", response);
                setAuth(false);
                return false;
            }
        } catch (error) {
            console.log("Error during login:", error);
            setAuth(false);
            return false;
        }
    }

    // Logout function
    function logout() {
        setAuth(false);
        setUsername(null);
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout, username }}>
            {children}
        </AuthContext.Provider>
    );
}
