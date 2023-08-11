import { Box, Button, useTheme } from "@chakra-ui/react";
import React from "react";

const SettingsOptions: React.FC = () => {
  const theme = useTheme();

  const buttonConfigurations = [
    {
      text: "Default",
      sx: theme.buttons.primarySmall,
      maxWidth: "124px",
    },
    {
      text: "tutors.fi",
      borderRadius: "none",
      fontSize: "18px",
      border: `4px solid ${theme.colors.secondary}`,
      sx: theme.buttons.secondarySmall,
      maxWidth: "124px",
    },
    {
      text: "shockey.com",
      borderRadius: "none",
      fontSize: "18px",
      border: `4px solid ${theme.colors.secondary}`,
      sx: theme.buttons.secondarySmall,
      maxWidth: "168px",
    },
    {
      text: "custom",
      borderRadius: "none",
      fontSize: "18px",
      border: `4px solid ${theme.colors.secondary}`,
      sx: theme.buttons.secondarySmall,
      maxWidth: "124px",
    },
  ];

  return (
    <Box mt="73px" display="flex" gap="10px" alignItems="center">
      {buttonConfigurations.map((config, index) => (
        <Button
          key={index}
          height="48px"
          {...config} // Spread the configuration properties
        >
          {config.text}
        </Button>
      ))}
    </Box>
  );
};

export default SettingsOptions;
