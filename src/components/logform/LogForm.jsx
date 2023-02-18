import { useEffect, useState } from "react";
import { logWhitEmail } from "../../firebase/logInUser";
import { signInWhitGoogle } from "../../firebase/signInGoogle";
import { singWhitEmail } from "../../firebase/singInUser";
import style from "./logoForm.module.scss";

const initialValueForm = {
  email: "",
  password: "",
  checkPass: "",
};

const LogForm = ({ type, isLogged }) => {
  const [formData, setFormData] = useState(initialValueForm);
  const [logError, setLogError] = useState(null);

  useEffect(() => {
    setFormData(initialValueForm);
  }, [isLogged]);

  useEffect(() => {
    setTimeout(() => {
      setLogError(null);
    }, 3000);
  }, [logError]);

  // Manejo de formulario de inicio de sesión ***

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitLogIn = (e) => {
    e.preventDefault();
    const { email, password, checkPass } = formData;

    function signValidate() {
      if (!email || !password || !checkPass) {
        handleError("blank space");
        return true;
      }

      if (password.length < 6) {
        handleError("characters left");
        return true;
      }

      if (checkPass !== password) {
        handleError("missed password");
        return true;
      }
    }

    if (type === "Registrarse") {
      const error = signValidate();
      if (error) return;

      singWhitEmail(email, password).catch((error) => handleError(error));
    } else {
      logWhitEmail(email, password).catch((error) => handleError(error));
    }
    setFormData(initialValueForm);
  };

  //  Manejo de errores de inicio de sesión ***

  const handleError = (error) => {
    if (error.includes("wrong-password")) {
      setLogError({
        error,
        errorMessage: "¡Oops! Correo o contraseña inválidos.",
      });
    }

    if (error.includes("email-already-in-use")) {
      setLogError({
        error,
        errorMessage: "Ya tenemos un usuario registrado con este mail.",
      });
    }

    if (error.includes("user-not-found")) {
      setLogError({
        error,
        errorMessage: "Mmm... este usuario no está registrado.",
      });
    }

    if (error === "characters left") {
      setLogError({
        error: null,
        errorMessage: "La contraseña debe tener almenos 6 caracteres.",
      });
    }

    if (error === "missed password") {
      setLogError({
        error: null,
        errorMessage: "Las contraseñas no coinciden.",
      });
    }

    if (error === "blank space") {
      setLogError({
        error: null,
        errorMessage: "Completa todos los campos.",
      });
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmitLogIn(e)}
      className={style.formContainer}
    >
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => handleChangeForm(e)}
        placeholder="Email"
        className={style.formContainer__inputs}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={(e) => handleChangeForm(e)}
        placeholder="Contraseña"
        className={style.formContainer__inputs}
      />

      {!isLogged && (
        <input
          type="password"
          name="checkPass"
          value={formData.checkPass}
          onChange={(e) => handleChangeForm(e)}
          placeholder="Repite contraseña"
          className={style.formContainer__inputs}
        />
      )}

      {logError && (
        <p className={style.formContainer__errorAdvice}>
          {logError.errorMessage}
        </p>
      )}
      <input
        type="submit"
        value={type}
        className={style.formContainer__inputs}
      />

      {isLogged && (
        <button
          type="button"
          className={style.googleButton}
          onClick={() => signInWhitGoogle()}
        >
          Acceso con Google
        </button>
      )}
    </form>
  );
};

export default LogForm;
