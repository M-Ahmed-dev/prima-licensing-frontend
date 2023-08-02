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

  const tabsData = [
    { label: "Plugins", to: "/" },
    { label: "Prima Integration", to: "/prima-integration" },
    { label: "Settings", to: "/settings" },
  ];

  return (
    <>
      <Router>
        <Tabs variant="unstyled">
          <TabList>
            {tabsData.map((tab, index) => (
              <Tab key={index} _selected={selected}>
                <Link to={tab.to}>{tab.label}</Link>
              </Tab>
            ))}
          </TabList>
          <TabPanels border="3px solid #252020">
            <TabPanel bgImage={bgImage} sx={panel}>
              <Box display="flex" gap="30px" flexWrap="wrap">
                <ShowNewUpdate />
                <ShowNewPlugin />
              </Box>
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
