import { useContext } from "react";
import { userContext } from "./context/UserContext";
import Home from "./Pages/home/Home";
import Loading from "./Pages/loading/Loading";
import Login from "./Pages/login/Login";

function App() {
  const { userState } = useContext(userContext);

  if (userState === "loading") return <Loading />;

  if (userState === "unlogged") return <Login />;

  return <Home />;
}

export default App;
