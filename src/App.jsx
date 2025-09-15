import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
//import RouteChangeHandler from "./components/RouteChangeHandler";

function App() {
  return (
    <AuthProvider>
      <Router>
          <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
