import { useAuth } from "../context/AuthContext";
import Login from "../pages/Login";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Login />;
}

export default ProtectedRoute;
