import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBx-phlbNInT7e7g1bEisvk-BqYr71SkVE",
  authDomain: "fir-frontend-2d2e3.firebaseapp.com",
  projectId: "fir-frontend-2d2e3",
  storageBucket: "fir-frontend-2d2e3.appspot.com",
  messagingSenderId: "693005415745",
  appId: "1:693005415745:web:a2b14b5f3a5700eab61dc0",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
