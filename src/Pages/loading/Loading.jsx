import React from "react";
import style from "./loading.module.scss";
const Loading = () => {
  return (
    <main className={style.backgroundPage}>
      <div className={style.animationContanier}>
        <img
          className={style.animationContanier__image}
          src="logos/logo.png"
          alt="logo web"
        />
      </div>
    </main>
  );
};

export default Loading;
