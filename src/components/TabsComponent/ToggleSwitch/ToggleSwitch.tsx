import {
  Box,
  FormControl,
  FormLabel,
  Switch,
  useTheme,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const theme = useTheme();

  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const handleSwitchChange = () => {
    setIsSwitchOn((prevState) => !prevState);
  };

  const SwitchStyles = {
    "& .chakra-switch__track": {
      border: `3px solid ${theme.colors.secondaryLight}`,
      bg: isSwitchOn ? theme.colors.white : theme.colors.secondaryLight,
      padding: "5px 8px",
      width: "60px",
    },
    "& .chakra-switch__thumb": {
      bg: isSwitchOn ? theme.colors.secondary : theme.colors.white,
      margin: isSwitchOn ? "auto" : "0",
    },
  };
  return (
    <>
      <Box mt="20px">
        <FormControl display="flex" gap="9px" alignItems="center">
          <Switch
            cursor="pointer"
            size="lg"
            colorScheme="orange"
            isChecked={isSwitchOn}
            onChange={handleSwitchChange}
            sx={SwitchStyles}
            defaultChecked
          />
          <FormLabel
            cursor="pointer"
            mb="0"
            color={theme.colors.secondary}
            fontWeight="700"
            textTransform="uppercase"
            fontSize="18px"
          >
            Active
          </FormLabel>
        </FormControl>
      </Box>
    </>
  );
};

export default ToggleSwitch;
