import React from "react";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../pages/AuthForm";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <AuthForm />;
};

export default ProtectedRoute;
