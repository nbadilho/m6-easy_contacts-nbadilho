import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const token = localStorage.getItem("@token_user");

  return <>{token ? <Outlet /> : <Navigate to="/" />}</>;
}

export { ProtectedRoute };
