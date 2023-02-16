import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function singWhitEmail(email, password) {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    if (newUser) return newUser.user;
  } catch (error) {
    console.log("este es el error", error);
  }
}
