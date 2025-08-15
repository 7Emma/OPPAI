import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import RouteChangeHandler from "./components/RouteChangeHandler";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <RouteChangeHandler>
          <AppRoutes />
        </RouteChangeHandler>
      </Router>
    </AuthProvider>
  );
}
