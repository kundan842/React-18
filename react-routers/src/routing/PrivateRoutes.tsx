import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  // if user is login then at run time children component will be render inside Outlet
  return <Outlet></Outlet>;
};

export default PrivateRoutes;
