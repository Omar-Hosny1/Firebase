import { app } from "./Firebase/firebaseConfing";
import "./App.css";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import UserAndPasswordAuth from "./user-and-password/UserAndPasswordAuth";

function App() {
  return (
    <>
      <UserAndPasswordAuth />
    </>
  );
}
export default App;
