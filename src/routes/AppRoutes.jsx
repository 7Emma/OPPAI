import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import New from "../pages/Blog/New";
import Personal from "../pages/Blog/Personal";
import Dashboard from "../pages/Dashboard";
import BlogLayout from "../components/layouts/BlogLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../pages/Errors/NotFound";
import AddInfo from "../components/addElement/AddInfo";
import AddNew from "../components/addElement/AddNew";
import Modifie from "../components/addElement/Modifie";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route
      path="/Actualite"
      element={
        <BlogLayout>
          <New />
        </BlogLayout>
      }
    />
    <Route
      path="/Personnel"
      element={
        <BlogLayout>
          <Personal />
        </BlogLayout>
      }
    />
    <Route
      path="/Dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/Add-info"
      element={
        <ProtectedRoute>
          <AddInfo />
        </ProtectedRoute>
      }
    />

    <Route
      path="/Add-new"
      element={
        <ProtectedRoute>
          <AddNew />
        </ProtectedRoute>
      }
    />
    <Route
      path="/Edit-info"
      element={
        <ProtectedRoute>
          <Modifie />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
