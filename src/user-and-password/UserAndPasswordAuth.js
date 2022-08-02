import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
function UserAndPasswordAuth() {
  const [signIn, setSignIn] = useState(false);
  let auth = getAuth();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const emailInputRefSignIn = useRef();
  const passwordInputRefSignIn = useRef();

  const submitHandler = () => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((respose) => {
        console.log(respose.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const submitHandlerSignIn = () => {
    const enteredEmail = emailInputRefSignIn.current.value;
    const enteredPassword = passwordInputRefSignIn.current.value;

    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      {!signIn && (
        <>
          {" "}
          <input
            type="email"
            placeholder="enter your email"
            ref={emailInputRef}
          />
          <input
            type="password"
            placeholder="enter your password"
            ref={passwordInputRef}
          />
          <button onClick={submitHandler}>Submit</button>
        </>
      )}

      <button onClick={() => setSignIn((prev) => !prev)}>Change</button>

      {signIn && (
        <>
          <input
            type="email"
            placeholder="enter your email to sign in"
            ref={emailInputRefSignIn}
          />
          <input
            type="password"
            placeholder="enter your password to sign in"
            ref={passwordInputRefSignIn}
          />
          <button onClick={submitHandlerSignIn}>Submit</button>
        </>
      )}
    </>
  );
}

export default UserAndPasswordAuth;
