import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/UserContext";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(userContext);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return user;
};
