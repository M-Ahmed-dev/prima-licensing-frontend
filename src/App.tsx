import React from "react";
import Layout from "./Layout/Layout";
import "./index.css";

import Login from "./components/Login/Login";
import { useIsAuthenticated } from "@azure/msal-react";
import TabsComponent from "./components/Tabs/TabsComponent";

function App() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      {isAuthenticated ? (
        <Layout>
          <TabsComponent />
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
