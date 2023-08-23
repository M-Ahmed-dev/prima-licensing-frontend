import { AuthenticatedTemplate, useIsAuthenticated, useMsal } from "@azure/msal-react";
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress, accounts } = useMsal()
  return !isAuthenticated && inProgress === 'none' && accounts.length === 0 ? <Navigate to='/login' /> : <AuthenticatedTemplate>{children}</AuthenticatedTemplate>;
}

export default PrivateRoute;
