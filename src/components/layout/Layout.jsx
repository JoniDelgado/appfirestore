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
            <div className={style.nameAndMailContainer}>
              <h4 className={style.nameAndMailContainer__name}>
                {user.displayName || user.email}
              </h4>
              <p className={style.nameAndMailContainer__email}>{user.email}</p>
            </div>
          </div>

          <div
            className={style.menuButton}
            onClick={() => setOPenMenu(!openMenu)}
          ></div>

          <nav className={`${style.nav} ${openMenu && style.nav_visible}`}>
            <img className={style.nav__image} src="logos/logo.png" alt="Logo" />
            <button className={style.nav__button} onClick={() => singOut()}>
              Cerrar Sesión
            </button>
            <div
              onClick={() => setOPenMenu(!openMenu)}
              className={style.nav__arrowButton}
            ></div>
          </nav>
        </header>
      ) : null}
      <Outlet />
    </>
  );
};

export default Layout;
