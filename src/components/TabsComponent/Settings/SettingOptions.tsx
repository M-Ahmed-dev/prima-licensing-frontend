import { Box, Button, useTheme } from "@chakra-ui/react";
import React from "react";

const SettingsOptions: React.FC = () => {
  const theme = useTheme();

  return (
    <Box mt='73px' display='flex' gap='10px' alignItems='center'>
      <Button maxWidth='124px' sx={theme.buttons.primarySmall}>
        Default
      </Button>
      <Button maxWidth='124px' sx={theme.buttons.secondarySmall}>
        tutors.fi
      </Button>
      <Button maxWidth='168px' sx={theme.buttons.secondarySmall}>
        shockey.com
      </Button>
      <Button maxWidth='124px' sx={theme.buttons.secondarySmall}>
        custom
      </Button>
    </Box>
  );
};

export default SettingsOptions;
