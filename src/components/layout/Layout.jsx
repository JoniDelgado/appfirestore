import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { singOut } from "../../firebase/singOut";
import { useUser } from "../../hooks/useUser";
import style from "./layout.module.scss";

const Layout = () => {
  const user = useUser();
  const [openMenu, setOPenMenu] = useState(false);
  return (
    <>
      {user ? (
        <header className={style.userPanel}>
          <div className={style.userDataContainer}>
            <img
              src={user.photoURL || "images/profile.png"}
              alt="foto de perfil de usuario"
              className={style.userDataContainer__image}
            />
            <h4 className={style.userDataContainer__name}>
              {user.displayName || user.email}
            </h4>
            <p className={style.userDataContainer__email}>{user.email}</p>
          </div>

          <nav
            className={style.nav}
            onClick={() => setOPenMenu(!openMenu)}
          ></nav>
          {openMenu && <button onClick={() => singOut()}>Cerrar Sesión</button>}
        </header>
      ) : null}
      <Outlet />
    </>
  );
};

export default Layout;
