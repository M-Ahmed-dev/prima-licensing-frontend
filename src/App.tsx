import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import "./index.css";

import Login from "./components/Login/Login";
import { useIsAuthenticated } from "@azure/msal-react";
import TabsComponent from "./components/Tabs/TabsComponent";

function App() {
  const isAuthenticated = useIsAuthenticated();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous check for authentication status
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed
  }, []);

  if (isLoading) {
    return null; // or a loading spinner
  }

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
