import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
// import { GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth/cordova';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //social Providers
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  function signOutUser() {
    setLoading(true);
    return signOut(auth);
  }

  //social login
  function googleLogin() {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  function twitterLogin() {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  }
  function githubLogin() {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  }
//observer
useEffect(() => {
  const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser);
setLoading(false)
  })

  return () => {
    unsubscribe()
  }
}, [])


  const authInfo = {
     user,
    createUser,
    loading,
    signInUser,
    signOutUser,
    githubLogin,
    googleLogin,
    twitterLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
