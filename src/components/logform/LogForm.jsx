import { useEffect, useState } from "react";
import { logWhitEmail } from "../../firebase/logInUser";
import { signInWhitGoogle } from "../../firebase/signInGoogle";
import { singWhitEmail } from "../../firebase/singInUser";
import style from "./logoForm.module.scss";

const initialValueForm = {
  email: "",
  password: "",
};

const LogForm = ({ type, isLogged }) => {
  const [formData, setFormData] = useState(initialValueForm);
  const [logError, setLogError] = useState(null);

  useEffect(() => {
    setFormData(initialValueForm);
  }, [isLogged]);

  useEffect(() => {
    if (logError) console.log(logError.error);
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
    const { email, password } = formData;

    function signValidate() {
      if (!email || !password)
        return alert("Debe ingresar un email y una contraseña valida");
      if (password.length < 6)
        return alert("La contraseña debe tener al menos 6 caracteres");
    }

    if (type === "Registrarse") {
      signValidate();
      singWhitEmail(email, password).catch((error) => handleError(error));
    } else {
      logWhitEmail(email, password).catch((error) => handleError(error));
    }
    setFormData(initialValueForm);
  };

  //  Manejo de errores de inicio de sesión ***

  const handleError = (error) => {
    if (error.includes("wrong-password"))
      setLogError({
        error,
        errorMessage: "¡Oops! Correo o contraseña inválidos.",
      });

    if (error.includes("email-already-in-use"))
      setLogError({
        error,
        errorMessage: "Ya tenemos un usuario registrado con este mail.",
      });

    if (error.includes("user-not-found"))
      setLogError({
        error,
        errorMessage: "Mmm... este usuario no está registrado.",
      });
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
