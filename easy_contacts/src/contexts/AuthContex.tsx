import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface iLoginContextProps {
  children: React.ReactNode;
}

interface iLoginContext {
  autoLogin: () => void;
}

export const AuthContext = createContext({} as iLoginContext);

export function AuthContextProvider({ children }: iLoginContextProps) {
  const navigate = useNavigate();

  function autoLogin() {
    const token = localStorage.getItem("@token_user");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      navigate("/contacts");
    }
  }

  return (
    <AuthContext.Provider value={{ autoLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
