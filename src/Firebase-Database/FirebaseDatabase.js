import React, { useRef } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
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
            return { ...item.data(), id: item.id };
          })
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updataData = () => {
    const updatedDoc = doc(database, "users", "QjQmo2larR458ihiZvBf");
    updateDoc(updatedDoc, {
      email: emailRef.current.value,
      password: "Omar",
    })
      .then((response) => {
        alert("Update Added");
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
      <button onClick={updataData}>Updata Item</button>
    </>
  );
}

export default FirebaseDatabase;
