import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import New from "../pages/Blog/New";
import Personal from "../pages/Blog/Personal";
import Dashboard from "../pages/Dashboard";
import BlogLayout from "../components/layouts/BlogLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../pages/Errors/NotFound";

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
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
