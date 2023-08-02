import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import TabsComponent from "./components/TabsComponent/TabsComponent";
import Layout from "./Layout/Layout";
import theme from "./theme/theme";

function App() {
  return (
    <>
      <Layout>
        <ChakraProvider theme={theme}>
          <TabsComponent />
        </ChakraProvider>
      </Layout>
    </>
  );
}

export default App;
