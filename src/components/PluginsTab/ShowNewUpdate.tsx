import { Box, useTheme } from "@chakra-ui/react";
import React from "react";
import MainView from "./MainView";

const ShowNewUpdate: React.FC = () => {
  const theme = useTheme();

  const BoxStyles = {
    minHeight: "860px",

    width: "100%",
    background: theme.colors.white,
    border: `3px solid ${theme.colors.secondaryLight}`,
    padding: "20px 25px",
  };

  return (
    <Box sx={BoxStyles}>
      <MainView />
    </Box>
  );
};

export default ShowNewUpdate;
