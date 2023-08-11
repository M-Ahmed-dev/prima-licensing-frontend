<<<<<<< HEAD
import React from "react";
import Layout from "./Layout/Layout";
import "./index.css";
import TabsComponent from "./components/TabsComponent";
=======
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import TabsComponent from "./components/TabsComponent/TabsComponent";
import Layout from "./Layout/Layout";
import theme from "./theme/theme";
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f

function App() {
  return (
    <>
      <Layout>
<<<<<<< HEAD
        <TabsComponent />
=======
        <ChakraProvider theme={theme}>
          <TabsComponent />
        </ChakraProvider>
>>>>>>> 5dec161faafb52b1f2e014376e43e3cc939cac1f
      </Layout>
    </>
  );
}

export default App;
