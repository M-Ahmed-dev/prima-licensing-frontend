import {
  Box,
  FormLabel,
  Input,
  Select,
  useTheme,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";

const AddSectionOne: React.FC = () => {
  const theme = useTheme();

  const SelectStyles = {
    borderRadius: "none",
    border: "3px solid #39808B",
    color: theme.colors.secondary,
  };

  return (
    <Box maxWidth='400px' width='100%'>
      <Box>
        <FormLabel sx={theme.fonts.subHeading}>Domain</FormLabel>
        <Input
          variant='flushed'
          placeholder='name'
          color={theme.colors.secondary}
          fontWeight='500'
          borderBottom='3px solid'
        />
      </Box>

      <Box>
        <FormLabel marginTop='30px' sx={theme.fonts.subHeading}>
          License Key
        </FormLabel>
        <Text>111C431E2XC3CB3LMM2YGH141</Text>
        <Link>Generate Again</Link>
      </Box>
      <Box minWidth='298px'>
        <Text sx={theme.fonts.subHeading} marginBottom='10px' marginTop='30px'>
          Site Type
        </Text>
        <Select sx={SelectStyles} placeholder='Select option'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Box>

      <Box minWidth='298px'>
        <Text sx={theme.fonts.subHeading} marginBottom='10px' marginTop='30px'>
          Subscription
        </Text>
        <Select sx={SelectStyles} placeholder='Select option'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Box>
    </Box>
  );
};

export default AddSectionOne;
