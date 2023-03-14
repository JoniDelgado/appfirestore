import style from "./home.module.scss";
import { ref, set, onValue } from "firebase/database";
import { database } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";

const Home = () => {
  const user = useUser();
  // const [data, setData] = useState([]);

  useEffect(() => {
    if (user) {
      const userRef = ref(database, `${user.uid}/`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          set(ref(database, `${user.uid}/tasks/`), {
            id: 0,
            task: "no hay tareas asignadas por el momento",
          });
        }
      });
    }
  }, []);

  const handleWrite = () => {
    console.log(data);
    // set(ref(database, "users/" + userId), {
    //   username,
    //   email,
    //   img,
    // });
  };

  return (
    <section>
      <h1>Este es el home</h1>
      <div className={style.projectContainer}>
        <img
          className={style.projectContainer__image}
          src="https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg"
          alt="imagen del espacio"
        />
        <p className={style.projectContainer__emoji}>😂</p>
        <div className={style.nameProject}>
          <p>Nuevo proyecto</p>
        </div>
      </div>

      <button onClick={() => handleWrite()}>escribir dato</button>

      <div></div>
    </section>
  );
};

export default Home;
