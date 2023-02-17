import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

export async function signInWhitGoogle() {
  const googleUser = await signInWithPopup(auth, googleProvider);
  return googleUser.user;
}
