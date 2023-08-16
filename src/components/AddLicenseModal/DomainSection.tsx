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

const DomainSection: React.FC = () => {
  const theme = useTheme();

  const SelectStyles = {
    borderRadius: "none",
    border: "3px solid #39808B",
    color: theme.colors.secondary,
  };

  return (
    <Box>
      <Box>
        <FormLabel sx={theme.fonts.subHeading}>Domain</FormLabel>
        <Input
          variant="flushed"
          placeholder="name"
          color={theme.colors.secondary}
          fontWeight="500"
          borderBottom="3px solid"
          width="100%"
          minWidth="400px"
        />
      </Box>

      <Box>
        <FormLabel marginTop="30px" sx={theme.fonts.subHeading}>
          License Key
        </FormLabel>
        <Text fontWeight="600" sx={theme.fonts.tealParagraph}>
          111C431E2XC3CB3LMM2YGH141
        </Text>
        <Link fontWeight="600" sx={theme.fonts.tealParagraph}>
          Generate Again
        </Link>
      </Box>
      <Box width="222px">
        <Text sx={theme.fonts.subHeading} marginBottom="10px" marginTop="30px">
          Site Type
        </Text>
        <Select sx={SelectStyles} placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>

      <Box width="222px">
        <Text sx={theme.fonts.subHeading} marginBottom="10px" marginTop="30px">
          Subscription
        </Text>
        <Select sx={SelectStyles} placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </Box>
  );
};

export default DomainSection;
