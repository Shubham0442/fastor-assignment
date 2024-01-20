import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (token !== "") return children;
  else return <Navigate to="/" />;
};

export default PrivateRoute;
