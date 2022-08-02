import React, { useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../Firebase/firebaseConfing";
function FirebaseDatabase() {
  const collectionRef = collection(database, "users");

  const emailRef = useRef();
  const passwordRef = useRef();

  const sendDataHandler = () => {
    addDoc(collectionRef, {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
      .then((response) => {
        alert("Data Added!");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <input type="email" placeholder="Enter Your Email" ref={emailRef} />;
      <input
        type="password"
        placeholder="Enter Your password"
        ref={passwordRef}
      />
      <button onClick={sendDataHandler}>Submit</button>
    </>
  );
}

export default FirebaseDatabase;
