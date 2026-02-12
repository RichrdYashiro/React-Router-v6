import { useState } from "react";
import { InputCustom } from "../components";
import { useAuth } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [passsword, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const { login, user } = useAuth();

  const loginhand = (e) => {
    e.preventDefault();
    if (login(name, passsword)) {
      console.log("Вход выполнен");
      localStorage.setItem("user");
      setTimeout(() => {
        navigate(from, {
          replace: true,
        });
      }, 1000);
    } else {
      console.log("Ошибка доступа");
    }
  };

  return (
    <>
      {user && <>Вход выполнен {user.name}</>}
      <h1>login</h1>
      <form onSubmit={loginhand}>
        <InputCustom
          type="text"
          placeholder="Введите логин"
          label="Логин"
          color="red"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputCustom
          type="password"
          placeholder="Введите пароль"
          label="Пароль"
          color="red"
          value={passsword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
