import React from "react";
import Layout from "./Layout/Layout";
import "./index.css";

import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  useTheme,
  Box,
} from "@chakra-ui/react";
import bgImage from "../src/assets/bgImage.png";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ShowNewUpdate from "./components/PluginsTab/ShowNewUpdate";
import ShowPlugin from "./components/PluginsTab/AddNewPlugin/ShowPlugin";
import PrimaTable from "./components/PrimaIntegrationTable/PrimaTable";
import Settings from "./components/SettingsTab/Settings";
import Login from "./components/Login/Login";

function App() {
  const theme = useTheme();

  const selected = {
    bg: theme.colors.gray,
    color: theme.colors.white,
    height: "100%",
    textTransform: "uppercase",
  };

  const TabStyle = {
    fontFamily: "Roboto",
    fontSize: "20px",
    textTransform: "uppercase",
  };

  const panel = {
    bgSize: "cover",
    bgPosition: "center",
    bgRepeat: "no-repeat",
    padding: "33px",
  };

  const settingsTab = {
    marginLeft: "auto",
  };

  const [isAuth, setIsAuth] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      <Router>
        {!isAuth ? (
          <Layout>
            <Tabs variant="unstyled">
              <TabList>
                <Link to="/">
                  <Tab sx={TabStyle} _selected={selected}>
                    Plugins
                  </Tab>
                </Link>
                <Link to="/prima-integration">
                  <Tab sx={TabStyle} _selected={selected}>
                    Prima Integration
                  </Tab>
                </Link>
                <Link to="/settings" style={settingsTab}>
                  <Tab sx={TabStyle} _selected={selected}>
                    Settings
                  </Tab>
                </Link>
              </TabList>
              <TabPanels border="3px solid #252020">
                <TabPanel bgImage={bgImage} sx={panel}>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <Box display="flex" gap="30px" flexWrap="wrap">
                            <Box
                              sx={{
                                minWidth: "537px",
                              }}
                            >
                              <ShowNewUpdate />
                            </Box>
                            <Box
                              sx={{
                                flexGrow: 1,
                                height: "100%",
                              }}
                            >
                              <ShowPlugin />
                            </Box>
                          </Box>
                        </>
                      }
                    />
                  </Routes>
                </TabPanel>

                <TabPanel sx={panel}>
                  <Routes>
                    <Route path="/prima-integration" element={<PrimaTable />} />
                  </Routes>
                </TabPanel>
                <TabPanel
                  bgImage={bgImage}
                  sx={{
                    bgSize: "cover",
                    bgPosition: "center",
                    bgRepeat: "no-repeat",
                    padding: "33px",
                    marginLeft: "auto",
                  }}
                >
                  <Routes>
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Layout>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
