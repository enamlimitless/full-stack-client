import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {
  const [userDetail, setUserDetail] = useContext(UserContext)
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
   const handleGoogleSingIn = () =>{
    const  provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const {displayName, email} = result.user;
      const signInUser = {name: displayName, email}
      setUserDetail(signInUser) 
      console.log(signInUser)
      console.log(userDetail)
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      // var credential = error.credential;
      console.log(errorCode,errorMessage, email)
    });

    }
    return (
        <div>
            <button className="login-btn" onClick={handleGoogleSingIn}>Google Sign In</button>
        </div>
    );
};

export default Login;