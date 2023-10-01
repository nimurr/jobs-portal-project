import {  createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

export default function Authprovider({children}) {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginWithGmail = (email, password) =>{
        return signInWithEmailAndPassword(auth , email , password)
    }
    const logout = () =>{
        signOut(auth)
    }


    const [user ,setUser] = useState(null);
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {createUser,loginWithGmail ,user , logout};
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
