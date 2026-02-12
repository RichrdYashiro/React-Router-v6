import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export function PrivateRoute({ children }) {
  const { user } = useAuth();

  const location = useLocation();

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return <>{children}</>;
}
