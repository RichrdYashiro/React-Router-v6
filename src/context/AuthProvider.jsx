import { createContext, useContext, useState } from "react";
import users from "../jsons/users.json";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user")),
  );

  const login = (name, password) => {
    const findUser = users.find(
      (e) => e.name === name && e.password === password,
    );
    if (findUser) {
      setUser(findUser);
      localStorage.setItem("user", JSON.stringify(found));
      return true;
    }
    return false;
  };

  const value = {
    user,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
