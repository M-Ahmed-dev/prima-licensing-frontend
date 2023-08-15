import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { MsalProvider } from "@azure/msal-react";

import { pca } from "./configure"; // Import the pca instance

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MsalProvider instance={pca}>
        <App />
      </MsalProvider>
    </ChakraProvider>
  </React.StrictMode>
);
