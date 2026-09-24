import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Spinner } from "./UI";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <div className="mx-auto flex max-w-[680px] items-center justify-center px-6 py-12 pb-24">
        <Spinner />
      </div>
    );
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
