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
      path="/new"
      element={
        <BlogLayout>
          <New />
        </BlogLayout>
      }
    />
    <Route
      path="/personal"
      element={
        <BlogLayout>
          <Personal />
        </BlogLayout>
      }
    />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/add-info"
      element={
        <ProtectedRoute>
          <AddInfo />
        </ProtectedRoute>
      }
    />

    <Route
      path="/add-new"
      element={
        <ProtectedRoute>
          <AddNew />
        </ProtectedRoute>
      }
    />
    <Route
      path="/edit-info"
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
