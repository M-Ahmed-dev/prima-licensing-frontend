import { Text, useTheme } from "@chakra-ui/react";
import React from "react";

const SettingsHeading: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Text
        as="h1"
        fontWeight="700"
        fontSize="20px"
        color={theme.colors.secondary}
      >
        Reminder email templates for Priima Integration
      </Text>
    </>
  );
};

export default SettingsHeading;
