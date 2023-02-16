import React, { useState } from "react";
import LogForm from "../../components/logform/LogForm";
import style from "./login.module.scss";

const Login = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <main className={style.loginPageBg}>
      <section className={style.loginContainer}>
        <div className={style.loginHeader}>
          <img
            src="logos/logo.png"
            alt="logo web"
            className={style.loginHeader__logo}
          />
          <h1 className={style.loginHeader__title}>Hola otra vez!</h1>
          <p className={style.loginHeader__description}>
            Recuerda que es necesario que inicies sesión para poder cargar tus
            proyectos.
          </p>
        </div>

        <LogForm
          type={isLogged ? "Acceder" : "Registrarse"}
          isLogged={isLogged}
        />
        <p className={style.singUp}>
          {isLogged ? "Aún no tienes cuenta? " : "Ya tienes cuenta? "}
          <strong
            onClick={() => setIsLogged(!isLogged)}
            className={style.singUp__link}
          >
            {isLogged ? "Registrate" : "Accede"}
          </strong>
        </p>
      </section>
    </main>
  );
};

export default Login;
