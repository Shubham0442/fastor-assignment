import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState("");
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ mobile, setMobile, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
