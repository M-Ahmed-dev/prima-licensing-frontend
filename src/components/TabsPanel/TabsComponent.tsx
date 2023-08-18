import { Tabs, Tab, TabList, TabPanels, useTheme } from "@chakra-ui/react";
import React from "react";

import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeTabPanel from "./HomeTabPanel";
import SettingsTabPanel from "./SettingsTabPanel";
import PrimaTablePanel from "./PrimaTablePanel";
import PrivateRoute from "../Authentication/PrivateRouting";
import Login from "../Login/Login";

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

  const settingsTab = {
    marginLeft: "auto",
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomeTabPanel />
              </PrivateRoute>
            }
          />
          <Route
            path="/prima-integration"
            element={
              <PrivateRoute>
                <PrimaTablePanel />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <SettingsTabPanel />
              </PrivateRoute>
            }
          />
        </Routes>
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
            <HomeTabPanel />
            <PrimaTablePanel />
            <SettingsTabPanel />
          </TabPanels>
        </Tabs>
      </Router>
    </>
  );
};

export default TabsComponent;
