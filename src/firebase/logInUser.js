import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function logWhitEmail(email, password) {
  try {
    const logUser = await signInWithEmailAndPassword(auth, email, password);
    if (logUser) return logUser.user;
  } catch (error) {
    console.log(error);
    throw error.code;
  }
}
