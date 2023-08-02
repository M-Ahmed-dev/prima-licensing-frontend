import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import AddNewVersion from "./AddNewVersion/AddNewVersion";
import VersionHistory from "./AddNewVersion/VersionHistory";
import ToggleSwitch from "./ToggleSwitch";

const UpdateForm: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Text
          borderBottom={`3px solid ${theme.colors.secondary}`}
          sx={theme.fonts.h1}
        >
          Priima Integration
        </Text>
        <Box mt="21px">
          <ToggleSwitch />
        </Box>
        <AddNewVersion />
        <VersionHistory />
        <FormControl>
          <Box mt="16px">
            <FormLabel sx={theme.fonts.subHeading}>Slug</FormLabel>
            <Input
              variant="flushed"
              placeholder="x.x.x"
              color={theme.colors.secondary}
              fontWeight="500"
              borderBottom="3px solid"
            />
          </Box>
          <Box mt="16px">
            <FormLabel sx={theme.fonts.subHeading}>Attached ZIP</FormLabel>-
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default UpdateForm;
