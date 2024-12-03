// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXCmKsz3JnHE3moOBiep4wNdgL52DExxI",
  authDomain: "linkedin-clone-cbf60.firebaseapp.com",
  projectId: "linkedin-clone-cbf60",
  storageBucket: "linkedin-clone-cbf60.appspot.com",
  messagingSenderId: "286665155326",
  appId: "1:286665155326:web:6d80340315b87b90c3bbaf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
