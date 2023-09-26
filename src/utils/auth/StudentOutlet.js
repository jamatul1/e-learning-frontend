import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import NotFoundPage from "../../pages/error/NotFoundPage";

export function StudentOutlet() {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) return <Navigate to="/signin" state={{ from: location }} />;
  return auth.user.role === "student" ? <Outlet /> : <NotFoundPage />;
}
