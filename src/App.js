import { app, database } from "./Firebase/firebaseConfing";
import "./App.css";
import FirebaseDatabase from "./Firebase-Database/FirebaseDatabase";

function App() {
  return (
    <>
      <FirebaseDatabase />
    </>
  );
}
export default App;
