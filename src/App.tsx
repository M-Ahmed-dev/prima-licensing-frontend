import React from "react";
import "./index.css";

// import Login from "./components/Login/Login";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import HomeTabPanel from "./components/TabsPanel/HomeTabPanel";
// import PrimaTablePanel from "./components/TabsPanel/PrimaTablePanel";
// import SettingsTabPanel from "./components/TabsPanel/SettingsTabPanel";
// import PrivateRoute from "./components/Authentication/PrivateRouting";
import TabsComponent from "./components/TabsPanel/TabsComponent";

const App: React.FC = () => {
  return (
    <>
      <TabsComponent />
    </>
  );
};

export default App;
