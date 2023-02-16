import React from "react";
import { Outlet } from "react-router-dom";
import { singOut } from "../../firebase/singOut";
import { useUser } from "../../hooks/useUser";
import style from "./layout.module.scss";

const Layout = () => {
  const user = useUser();

  return (
    <>
      {user ? (
        <header className={style.header}>
          <nav className={style.nav}>
            <div className={style.userDataContainer}>
              <img
                src={user.photoURL || "images/profile.png"}
                alt="foto de perfil de usuario"
                className={style.userDataContainer__image}
              />
              <h4>{user.displayName || user.email}</h4>
            </div>
            <button onClick={() => singOut()}>Cerrar Sesión</button>
          </nav>
        </header>
      ) : null}
      <Outlet />
    </>
  );
};

export default Layout;
