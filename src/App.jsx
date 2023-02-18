import { useContext } from "react";
import { userContext } from "./context/UserContext";
import Home from "./Pages/home/Home";
import Loading from "./Pages/loading/Loading";
import Login from "./Pages/login/Login";
import style from "./app.module.scss";

function App() {
  const { userState } = useContext(userContext);

  if (userState === "loading") return <Loading />;

  if (userState === "unlogged") return <Login />;

  return (
    <main className={style.appContainer}>
      <Home />
    </main>
  );
}

export default App;
