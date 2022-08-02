import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
function GoogleAuth() {
  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();

  const signUpGoogleHandler = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <button onClick={signUpGoogleHandler}>Sign Up with Google Account</button>
    </>
  );
}

export default GoogleAuth;
