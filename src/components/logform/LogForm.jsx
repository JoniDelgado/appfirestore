import { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/UserContext";
import { logWhitEmail } from "../../firebase/logInUser";
import { singWhitEmail } from "../../firebase/singInUser";
import style from "./logoForm.module.scss";

const initialValueForm = {
  email: "",
  password: "",
};

const LogForm = ({ type, isLogged }) => {
  const [formData, setFormData] = useState(initialValueForm);

  const user = useContext(userContext);

  useEffect(() => {
    setFormData(initialValueForm);
  }, [isLogged]);

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

    if (type === "Registrarse") {
      singWhitEmail(email, password).then((res) => user.setCurrentUser(res));
    } else {
      logWhitEmail(email, password).then((res) => user.setCurrentUser(res));
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
      <input
        type="submit"
        value={type}
        className={style.formContainer__inputs}
      />
    </form>
  );
};

export default LogForm;
