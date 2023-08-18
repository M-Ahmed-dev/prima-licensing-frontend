import { TabPanel } from "@chakra-ui/react";
import React from "react";
import PrimaTable from "../PrimaIntegrationTable/PrimaTable";

const PrimaTablePanel: React.FC = () => {
  const panel = {
    bgSize: "cover",
    bgPosition: "center",
    bgRepeat: "no-repeat",
    padding: "33.5px",
  };

  return (
    <TabPanel sx={panel}>
      <PrimaTable />
    </TabPanel>
  );
};

export default PrimaTablePanel;
