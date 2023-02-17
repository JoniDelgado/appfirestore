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
    setTimeout(() => {
      setLogError(null);
    }, 3000);
  }, [logError]);

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
      singWhitEmail(email, password);
    } else {
      logWhitEmail(email, password).catch((error) => setLogError(error));
    }

    setFormData(initialValueForm);
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
          ¡Oops! Correo o contraseña inválidos.
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
