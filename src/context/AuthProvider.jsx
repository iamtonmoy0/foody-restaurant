import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from "../lib/firebase.config";


export  const AuthContext=createContext(null)
const auth=getAuth(app)

const AuthProvider = ({children}) => {
	const [user,setUser]=useState(null);
	const [loader,setLoader] =useState(true);
	//create account
	const createUser=(email,password)=>{
		setLoader(true)
		return createUserWithEmailAndPassword(auth,email,password)
	}
	//login with email
	const logIn=(email,password)=>{
		setLoader(true)
		return signInWithEmailAndPassword(auth,email,password)
	}
	//google login 
	
	const googleLogin=(googleProvider)=>{
		return signInWithPopup(auth,googleProvider)
	}

	const gitLogin=(gitProvider)=>{
		return signInWithPopup(auth,gitProvider)
	}

	//logout
	const logOut=()=>{

		return signOut(auth);
	}
	
	//observer
	useEffect(()=>{
		const unsubscribe=onAuthStateChanged(auth,currentUser=>{
			setUser(currentUser)
			setLoader(false)
		})
		//unmounting observer
		return ()=>{
			return unsubscribe()
		}


	},[])

	const AuthInfo={
		auth,
		user,
		createUser,
		logIn,
		googleLogin,
		gitLogin,
		logOut,
		

	}
	return (
		<AuthContext.Provider value={AuthInfo} >
			{children}

		</AuthContext.Provider>
	);
}

export default AuthProvider;
