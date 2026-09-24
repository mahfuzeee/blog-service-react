// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Replace with your actual auth hook

const AdminProtection = ({ allowedRoles }) => {
  const { user, loading } = useAuth();

  // Optional: Handle loading state while checking token/session
  if (loading) {
    return <div>Loading...</div>;
  }

  // 1. Check if user is authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Check if user has the required role
  if (user.email !== "admin@example.com") {
    return <Navigate to="/unauthorized" replace />;
  }

  // If everything matches, render the child routes
  return <Outlet />;
};

export default AdminProtection;
