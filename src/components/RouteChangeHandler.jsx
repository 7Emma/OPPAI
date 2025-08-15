// src/components/RouteChangeHandler.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import LoadingPage from "./common/LoadingPage";

function RouteChangeHandler({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    // Détecte le changement de route
    //NProgress.start();
    setLoading(true);

    // Nom de la page à partir du chemin
    const name =
      location.pathname === "/" ? "Accueil" : location.pathname.slice(1);
    setPageName(name);

    // Simulation du temps de chargement
    const timer = setTimeout(() => {
      //NProgress.done();
      setLoading(false);
    }, 1600); // ici 0.6s

    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <LoadingPage pageName={pageName} />;
  }

  return children;
}

export default RouteChangeHandler;
