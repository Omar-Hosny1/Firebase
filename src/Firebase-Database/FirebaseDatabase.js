import React, { useRef } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
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

  const getDataHandler = () => {
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

  const updataDataHandler = () => {
    const updatedDoc = doc(database, "users", "Vay6JCe4HIHclfKnlUn9");
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

  const deleteDataHandler = () => {
    const deletedDoc = doc(database, "users", "Vay6JCe4HIHclfKnlUn9");
    deleteDoc(deletedDoc)
      .then((response) => {
        alert("Data Deleted");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <input type="text" placeholder="Enter Your Email" ref={emailRef} />;
      <input type="text" placeholder="Enter Your password" ref={passwordRef} />
      <button onClick={sendDataHandler}>Send Data</button>
      <button onClick={getDataHandler}>Get Data</button>
      <button onClick={updataDataHandler}>Updata Item</button>
      <button onClick={deleteDataHandler}>Delete Data</button>
    </>
  );
}

export default FirebaseDatabase;
