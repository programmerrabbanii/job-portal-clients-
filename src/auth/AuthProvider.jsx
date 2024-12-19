import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import axios from "axios";
export const AuthContext=createContext()
const provider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
   

    const authInfo={
        createUser,
        signUser,
        googleLogin,
        setUser,
        logOutUser,
        user,
        loading


    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email) {
                setLoading(true); 
                const user = { email: currentUser.email };
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log('login token', res.data);
                        setLoading(false); 
                    })
                    .catch(err => {
                        console.error('JWT Error:', err);
                        setLoading(false); 
                    });
            } else {
                setLoading(true); 
                axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log('Logout success:', res.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.error('Logout Error:', err);
                        setLoading(false); 
                    });
            }
        });
    
        return () => {
            unsubscribe(); 
        };
    }, []);
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;