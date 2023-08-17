import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import { msalConfig } from "./configure";

const pca = new PublicClientApplication(msalConfig);

root.render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MsalProvider>
  </React.StrictMode>
);
