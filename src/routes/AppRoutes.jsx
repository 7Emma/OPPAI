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
import AdminDashboard from "../pages/Admin";
import AddUser from "../components/admin/AddUser";

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

    <Route path="*" element={<NotFound />} />
    <Route path="/admin/add-user" element={<AddUser />} />
    <Route path="/admin" element={<AdminDashboard />} />
  </Routes>
);

export default AppRoutes;
