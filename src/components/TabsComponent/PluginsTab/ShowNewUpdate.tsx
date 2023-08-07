import { Box, useTheme } from "@chakra-ui/react";
import React from "react";
import MainView from "./MainView";

const ShowNewUpdate: React.FC = () => {
  const theme = useTheme();

  const BoxStyles = {
    maxWidth: "537px",
    minHeight: "802px",

    width: "100%",
    background: theme.colors.white,
    border: `3px solid ${theme.colors.secondaryLight}`,
    padding: "20px 25px",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={BoxStyles}
    >
      <MainView />
    </Box>
  );
};

export default ShowNewUpdate;
