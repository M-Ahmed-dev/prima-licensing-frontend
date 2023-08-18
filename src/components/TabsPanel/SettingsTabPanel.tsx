import { TabPanel } from "@chakra-ui/react";
import React from "react";
import Settings from "../SettingsTab/Settings";

import bgImage from "../../assets/bgImage.png";

const SettingsTabPanel: React.FC = () => {
  const panel = {
    bgSize: "cover",
    bgPosition: "center",
    bgRepeat: "no-repeat",
    padding: "33px",
    marginLeft: "auto",
  };
  return (
    <TabPanel bgImage={bgImage} sx={panel}>
      <Settings />
    </TabPanel>
  );
};

export default SettingsTabPanel;
