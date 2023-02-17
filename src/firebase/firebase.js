import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP2AhxxqnLlqIiimHuvEMQE73Ob7xA2Hw",
  authDomain: "multitaskapp-51651.firebaseapp.com",
  projectId: "multitaskapp-51651",
  storageBucket: "multitaskapp-51651.appspot.com",
  messagingSenderId: "15603279607",
  appId: "1:15603279607:web:8d7b3ebf757542ae9395f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
