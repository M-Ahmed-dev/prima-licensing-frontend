import React from "react";
import "./index.css";
import TabsComponent from "./components/TabsPanel/TabsComponent";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import PrimaTable from "./components/PrimaIntegrationTable/PrimaTable";
import Settings from "./components/SettingsTab/Settings";
import PrimaTablePanel from "./components/TabsPanel/PrimaTablePanel";
import PrivateRoute from "./components/Authentication/PrivateRouting";

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><TabsComponent /></PrivateRoute>}>
          <Route path="/" element={<PrivateRoute><PrimaTablePanel /></PrivateRoute>} />
          <Route path="/prima-integration" element={<PrivateRoute><PrimaTable /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
