import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AppLayout from "../Layout/AppLayout";

const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default ProtectedLayout;
