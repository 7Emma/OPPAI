import { createContext, useState, useContext } from "react";
import LoadingPage from "../components/common/LoadingPage";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pageName, setPageName] = useState("");

  return (
    <LoadingContext.Provider
      value={{ loading, setLoading, pageName, setPageName }}
    >
      {loading ? <LoadingPage pageName={pageName} /> : children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
