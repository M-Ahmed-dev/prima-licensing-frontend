import { useIsAuthenticated } from "@azure/msal-react";
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
