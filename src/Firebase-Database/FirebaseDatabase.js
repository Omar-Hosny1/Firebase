import React, { useRef } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
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

  const getData = () => {
    getDocs(collectionRef)
      .then((response) => {
        console.log(
          response.docs.map((item) => {
            return item.data();
          })
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <input type="text" placeholder="Enter Your Email" ref={emailRef} />;
      <input type="text" placeholder="Enter Your password" ref={passwordRef} />
      <button onClick={sendDataHandler}>Submit</button>
      <button onClick={getData}>Get Data</button>
    </>
  );
}

export default FirebaseDatabase;
