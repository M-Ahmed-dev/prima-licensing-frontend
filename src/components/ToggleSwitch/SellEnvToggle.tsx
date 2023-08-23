import {
  Box,
  FormControl,
  FormLabel,
  Switch,
  useTheme,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SellEnvToggle: React.FC = () => {
  const theme = useTheme();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSellEnv = () => {
    setIsSwitchOn((prevState) => !prevState);
  };

  const SwitchStyles = {
    "& .chakra-switch__track": {
      border: isSwitchOn
        ? `2px solid ${theme.colors.secondaryLight}`
        : `2px solid ${theme.colors.darkGray}`,
      bg: isSwitchOn ? theme.colors.white : null,
    },
    "& .chakra-switch__thumb": {
      bg: isSwitchOn ? theme.colors.secondary : theme.colors.darkGray,
    },
  };

  return (
    <Box>
      <FormControl display='flex' justifyContent='space-between'>
        <FormLabel sx={theme.fonts.subHeading}>Sell environment</FormLabel>
        <Switch
          isChecked={isSwitchOn}
          onChange={handleSellEnv}
          size='md'
          sx={SwitchStyles}
        />
      </FormControl>
    </Box>
  );
};

export default SellEnvToggle;
