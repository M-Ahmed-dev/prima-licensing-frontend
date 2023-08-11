import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
=======
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
=======
    <App />
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f
  </React.StrictMode>
);
