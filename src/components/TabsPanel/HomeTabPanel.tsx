import { Box, TabPanel } from "@chakra-ui/react";
import React from "react";
import ShowPlugin from "../PluginsTab/AddNewPlugin/ShowPlugin";
import ShowNewUpdate from "../PluginsTab/ShowNewUpdate";

import bgImage from "../../assets/bgImage.png";

const HomeTabPanel: React.FC = () => {
  const panel = {
    bgSize: "cover",
    bgPosition: "center",
    bgRepeat: "no-repeat",
    padding: "33.5px",
  };

  return (
    <TabPanel bgImage={bgImage} sx={panel}>
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
    </TabPanel>
  );
};

export default HomeTabPanel;
