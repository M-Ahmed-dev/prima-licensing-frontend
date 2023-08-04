import { Box, Button, useTheme } from "@chakra-ui/react";
import React from "react";

const SettingsOptions: React.FC = () => {
  const theme = useTheme();

  return (
    <Box mt="73px" display="flex" gap="10px" alignItems="center">
      <Button height="48px" maxWidth="124px" sx={theme.buttons.primarySmall}>
        Default
      </Button>
      <Button
        borderRadius="none"
        maxWidth="124px"
        height="48px"
        fontSize="18px"
        border={`4px solid ${theme.colors.secondary}`}
        sx={theme.buttons.secondarySmall}
      >
        tutors.fi
      </Button>
      <Button
        borderRadius="none"
        height="48px"
        fontSize="18px"
        maxWidth="168px"
        border={`4px solid ${theme.colors.secondary}`}
        sx={theme.buttons.secondarySmall}
      >
        shockey.com
      </Button>
      <Button
        borderRadius="none"
        height="48px"
        fontSize="18px"
        maxWidth="124px"
        border={`4px solid ${theme.colors.secondary}`}
        sx={theme.buttons.secondarySmall}
      >
        custom
      </Button>
    </Box>
  );
};

export default SettingsOptions;
