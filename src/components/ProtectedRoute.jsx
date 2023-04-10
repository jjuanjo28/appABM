import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, user }) => {
  // creador de rutas protegidas si el user que llega de App no esta cargado, nos regresa a Home, para ir a loggearse
  if (user.length == 0) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;
