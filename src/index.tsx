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

import { LogLevel } from "@azure/msal-browser";

const pca = new PublicClientApplication({
  auth: {
    clientId: "f3fbeb5f-fb95-4362-b3ca-d2bdc9d3a8c2",
    authority:
      "https://login.microsoftonline.com/92c7c19e-e453-46ec-9eb7-b5a0afc1be44",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MsalProvider>
  </React.StrictMode>
);
