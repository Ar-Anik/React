import useAuth from "../hook/useAuth";
import { Outlet, Navigate } from "react-router-dom";

function PrivateOutlet() {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
