import { Box, Button, useTheme } from "@chakra-ui/react";
import React from "react";

interface Props {
  handleUpdateClick: () => void;
}

const PrimaIntegrationBtns: React.FC<Props> = ({ handleUpdateClick }) => {
  const theme = useTheme();

  return (
    <>
      <Box mt="30px" display="flex" flexDirection="column" gap="11px">
        <Button sx={theme.buttons.secondary} height="none">
          Browse Files
        </Button>
        <Button sx={theme.buttons.primary} height="none">
          Update
        </Button>
        <Button
          onClick={handleUpdateClick}
          sx={theme.buttons.delete}
          height="none"
        >
          Discard
        </Button>
      </Box>
    </>
  );
};

export default PrimaIntegrationBtns;
