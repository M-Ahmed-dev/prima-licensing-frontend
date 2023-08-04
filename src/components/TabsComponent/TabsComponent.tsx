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
import bgImage from "../../assets/bgImage.png";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PrimaTable from "./PrimaTable/PrimaTable";
import Settings from "./Settings/Settings";
import ShowNewUpdate from "./TabOne/ShowNewUpdate";
import ShowNewPlugin from "./TabOne/ShowNewPlugin";

const TabsComponent: React.FC = () => {
  const theme = useTheme();

  const selected = {
    bg: theme.colors.gray,
    color: theme.colors.white,
    height: "40px",
    textTransform: "uppercase",
  };

  const panel = {
    bgSize: "cover",
    bgPosition: "center",
    bgRepeat: "no-repeat",
    padding: "33px",
  };

  return (
    <>
      <Router>
        <Tabs variant="unstyled">
          <TabList>
            <Tab textTransform="uppercase" _selected={selected}>
              <Link to="/">Plugins</Link>
            </Tab>
            <Tab textTransform="uppercase" _selected={selected}>
              <Link to="/prima-integration">Prima Integration</Link>
            </Tab>
            <Tab
              textTransform="uppercase"
              marginLeft="auto"
              _selected={selected}
            >
              <Link to="/settings">Settings</Link>
            </Tab>
          </TabList>
          <TabPanels border="3px solid #252020">
            <TabPanel bgImage={bgImage} sx={panel}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Box display="flex" gap="30px" flexWrap="wrap">
                        <ShowNewUpdate />
                        <ShowNewPlugin />
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
