import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const userContext = createContext();

export function CurrentUserContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userState, setUserState] = useState("loading");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setTimeout(() => {
        if (user) setUserState("logged");
        else setUserState("unlogged");
        setCurrentUser(user);
      }, 3000);
    });
  }, []);

  const user = { currentUser, setCurrentUser, userState };

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}
