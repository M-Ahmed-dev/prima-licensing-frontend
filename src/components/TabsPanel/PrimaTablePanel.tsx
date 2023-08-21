import { Box } from "@chakra-ui/react";
import React from "react";
import ShowNewUpdate from "../PluginsTab/ShowNewUpdate";
import ShowPlugin from "../PluginsTab/AddNewPlugin/ShowPlugin";

const PrimaTablePanel: React.FC = () => {


  return (
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
  );
};

export default PrimaTablePanel;
