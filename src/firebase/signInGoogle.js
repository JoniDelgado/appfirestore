import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

export async function signInWhitGoogle() {
  const googleUser = await signInWithPopup(auth, googleProvider);
  const credential = googleProvider.credentialFromResult(googleUser);
  const token = credential.accessToken;

  return googleUser.user;
}
