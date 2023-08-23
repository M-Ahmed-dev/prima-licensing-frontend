import { Box, FormLabel, useTheme, Select, Text } from "@chakra-ui/react";
import React from "react";

const AddSectionTwo: React.FC = () => {
  const theme = useTheme();

  const SelectStyles = {
    borderRadius: "none",
    border: "3px solid #39808B",
    color: theme.colors.secondary,
  };

  return (
    <Box>
      <Box maxWidth='275px' width='100%'>
        <Text sx={theme.fonts.subHeading} marginBottom='10px' marginTop='30px'>
          Start Date
        </Text>
        <Select sx={SelectStyles} placeholder='Start Date'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Box>

      <Box>
        <FormLabel marginTop='30px' sx={theme.fonts.subHeading}>
          Expiration Date
        </FormLabel>
        <Text>-</Text>
      </Box>

      <Box maxWidth='222px'>
        <Text sx={theme.fonts.subHeading} marginBottom='10px' marginTop='30px'>
          Email reminder of expiration
        </Text>
        <Select sx={SelectStyles} placeholder='Expiry Date'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Box>
      <Box maxWidth='222px'>
        <Text sx={theme.fonts.subHeading} marginBottom='10px' marginTop='30px'>
          Email reminder template
        </Text>
        <Select sx={SelectStyles} placeholder='Expiry Date'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Box>
    </Box>
  );
};

export default AddSectionTwo;
