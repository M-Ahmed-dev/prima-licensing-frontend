import { Box, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const PrimaIntegration: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Text sx={theme.fonts.h1}>priima integration</Text>
      <Text>
        Version <span style={{ fontWeight: "600" }}>2.2.5</span>
      </Text>
      <Box mt="20px">
        <ToggleSwitch />
      </Box>
    </>
  );
};

export default PrimaIntegration;
