import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingPage from "./common/LoadingPage";

function RouteChangeHandler({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState("");

  const getVariant = (path) => {
    //if (path.includes("dashboard")) return "gradient";
    if (path.includes("profil")) return "dark";
    return "default";
  };

  useEffect(() => {
    setLoading(true);

    const name =
      location.pathname === "/" ? "Accueil" : location.pathname.slice(1);
    setPageName(name);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // tu ajustes selon ton feeling

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return (
      <LoadingPage
        pageName={pageName}
        variant={getVariant(location.pathname)}
        showLogo={location.pathname === "/"}
        logoText="OPPAI"
      />
    );
  }

  return children;
}

export default RouteChangeHandler;
