import { useAuth } from "../context/AuthContext";
import AuthForm from "../context/AuthForm";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <AuthForm />;
};

export default ProtectedRoute;
