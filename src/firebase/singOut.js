import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export function singOut() {
  signOut(auth)
    .then(() => {
      alert("Se ha cerrado la sesión");
    })
    .catch((error) => {
      console.log(error);
    });
}
