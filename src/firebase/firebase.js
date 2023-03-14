import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP2AhxxqnLlqIiimHuvEMQE73Ob7xA2Hw",
  authDomain: "multitaskapp-51651.firebaseapp.com",
  projectId: "multitaskapp-51651",
  storageBucket: "multitaskapp-51651.appspot.com",
  messagingSenderId: "15603279607",
  appId: "1:15603279607:web:8d7b3ebf757542ae9395f2",
  databaseURL: "https://multitaskapp-51651-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
