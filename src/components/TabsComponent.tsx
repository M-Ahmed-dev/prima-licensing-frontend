import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  useTheme,
  Box,
} from "@chakra-ui/react";
import React from "react";
import bgImage from "../assets/bgImage.png";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ShowNewUpdate from "./PluginsTab/ShowNewUpdate";
import ShowPlugin from "./PluginsTab/AddNewPlugin/ShowPlugin";
import PrimaTable from "./PrimaIntegrationTable/PrimaTable";
import Settings from "./SettingsTab/Settings";

const TabsComponent: React.FC = () => {
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
    padding: "34px",
  };

  const settingsTab = {
    marginLeft: "auto",
  };

  return (
    <>
      <Router>
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
      </Router>
    </>
  );
};

export default TabsComponent;
