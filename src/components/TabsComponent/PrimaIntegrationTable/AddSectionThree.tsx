import {
  Box,
  FormLabel,
  useTheme,
  Select,
  Text,
  Textarea,
  Switch,
  FormControl,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AddSectionThree: React.FC = () => {
  const theme = useTheme();

  const SelectStyles = {
    borderRadius: "none",
    border: "3px solid #39808B",
    color: theme.colors.secondary,
  };

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchChange = () => {
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
    <Box maxWidth="522px" width="100%">
      <Box>
        <FormLabel sx={theme.fonts.subHeading}>Notes</FormLabel>
        <Textarea
          placeholder="name"
          color={theme.colors.secondary}
          fontWeight="500"
          border="3px solid"
          height="60px"
          borderRadius="none"
          width="100%"
        />
      </Box>
      <Box maxWidth="217px" width="100%">
        <Text sx={theme.fonts.subHeading} marginBottom="10px" marginTop="30px">
          Premium Type
        </Text>
        <Select sx={SelectStyles} placeholder="Start Date">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>

      <Box mt="50px">
        <Box>
          <FormControl display="flex" justifyContent="space-between">
            <FormLabel sx={theme.fonts.subHeading}>Demo</FormLabel>
            <Switch
              isChecked={isSwitchOn}
              onChange={handleSwitchChange}
              size="md"
              sx={SwitchStyles}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl display="flex" justifyContent="space-between">
            <FormLabel sx={theme.fonts.subHeading}>Sell environment</FormLabel>
            <Switch
              isChecked={isSwitchOn}
              onChange={handleSwitchChange}
              size="md"
              sx={SwitchStyles}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default AddSectionThree;
