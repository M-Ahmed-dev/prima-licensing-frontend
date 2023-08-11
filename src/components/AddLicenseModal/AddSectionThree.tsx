import {
  Box,
  FormLabel,
  useTheme,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import DemoToggle from "../ToggleSwitch/DemoToggle";
import SellEnvToggle from "../ToggleSwitch/SellEnvToggle";

const AddSectionThree: React.FC = () => {
  const theme = useTheme();

  const SelectStyles = {
    borderRadius: "none",
    border: "3px solid #39808B",
    color: theme.colors.secondary,
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
        <DemoToggle />
        <SellEnvToggle />
      </Box>
    </Box>
  );
};

export default AddSectionThree;
