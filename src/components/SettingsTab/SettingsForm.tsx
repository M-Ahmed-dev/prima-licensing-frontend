import React from "react";
import { Box, Button, Input, Text, useTheme } from "@chakra-ui/react";

const SettingsForm: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box mt='45px'>
        <Text fontWeight='600' fontSize='18px' marginBottom='10px'>
          Email Subject
        </Text>
        <Input
          maxWidth='562px'
          placeholder='Your {{site_name}} license will expire soon.'
          size='md'
          border={"4px solid" + theme.colors.secondary}
          sx={{
            borderRadius: "none",
          }}
        />
      </Box>

      <Box mt='40px'>
        <Text fontWeight='600' fontSize='18px' marginBottom='10px'>
          Email Body
        </Text>
        <Input
          maxWidth='959px'
          placeholder='Your {{site_name}} site license will expire on {{expiry_date}}.'
          size='lg'
          border={"4px solid" + theme.colors.secondary}
          sx={{
            borderRadius: "none",
          }}
        />
      </Box>

      <Box display='flex' gap='11px' mt='78px'>
        <Button height='58px' maxWidth='260px' sx={theme.buttons.delete}>
          Discard
        </Button>
        <Button height='58px' maxWidth='260px' sx={theme.buttons.primary}>
          Update
        </Button>
      </Box>
    </>
  );
};

export default SettingsForm;
