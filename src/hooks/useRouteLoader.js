import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";

export default function useRouteLoader() {
  const location = useLocation();
  const { setLoading, setPageName } = useLoading();

  useEffect(() => {
    setLoading(true);
    setPageName(
      location.pathname === "/" ? "Page principale" : location.pathname
    );

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Temps du chargement simulé

    return () => clearTimeout(timer);
  }, [location.pathname]);
}
