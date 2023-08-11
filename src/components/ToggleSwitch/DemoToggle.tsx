import {
  Box,
  FormControl,
  useTheme,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import React, { useState } from "react";

const DemoToggle: React.FC = () => {
  const theme = useTheme();

  const [isDemoOn, setIsDemo] = useState(false);

  const handleDemoSwitch = () => {
    setIsDemo((prevState) => !prevState);
  };

  const SwitchStyles = {
    "& .chakra-switch__track": {
      border: isDemoOn
        ? `2px solid ${theme.colors.secondaryLight}`
        : `2px solid ${theme.colors.darkGray}`,
      bg: isDemoOn ? theme.colors.white : null,
    },
    "& .chakra-switch__thumb": {
      bg: isDemoOn ? theme.colors.secondary : theme.colors.darkGray,
    },
  };
  return (
    <Box>
      <FormControl display="flex" justifyContent="space-between">
        <FormLabel sx={theme.fonts.subHeading}>Demo</FormLabel>
        <Switch
          isChecked={isDemoOn}
          onChange={handleDemoSwitch}
          size="md"
          sx={SwitchStyles}
        />
      </FormControl>
    </Box>
  );
};

export default DemoToggle;
