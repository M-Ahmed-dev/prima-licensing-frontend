import { Box } from "@chakra-ui/react";
import React from "react";
import VersionHistory from "./AddNewVersion/VersionHistory";
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const UpdateForm: React.FC = () => {
  // const theme = useTheme();

  return (
    <>
      <Box>
        {/* <Text
          borderBottom={`3px solid ${theme.colors.secondary}`}
          sx={theme.fonts.h1}
        >
          Priima Integration
        </Text>
        <Box mt="21px">
          <ToggleSwitch />
        </Box> */}
        <VersionHistory />
      </Box>
    </>
  );
};

export default UpdateForm;
