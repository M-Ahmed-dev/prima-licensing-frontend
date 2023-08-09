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

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setIsSwitchOn((prevState) => !prevState);
  };

  const SwitchStyles = {
    "& .chakra-switch__track": {
      // border: `3px solid ${theme.colors.secondaryLight}`,
      border: isSwitchOn
        ? `3px solid ${theme.colors.secondaryLight}`
        : `3px solid ${theme.colors.darkGray}`,
      padding: "5px 8px",
    },
    "& .chakra-switch__thumb": {
      bg: isSwitchOn ? theme.colors.secondary : theme.colors.darkGray,
    },
  };
  return (
    <>
      <Box mt="20px">
        <FormControl display="flex" gap="18px" alignItems="center">
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
            // color={theme.colors.secondary}
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
