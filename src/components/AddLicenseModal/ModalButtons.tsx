import { Box, Button, useTheme } from "@chakra-ui/react";
import React from "react";

interface Props {
  handleClick: () => void;
}

const ModalButtons: React.FC<Props> = ({ handleClick }) => {
  const theme = useTheme();

  return (
    <>
      <Box display='flex' gap='20px' alignItems='end' justifyContent='flex-end'>
        <Button
          maxWidth='207px'
          onClick={handleClick}
          sx={theme.buttons.discardSm}
        >
          Discard
        </Button>
        <Button
          maxWidth='207px'
          onClick={handleClick}
          mt='11px'
          sx={theme.buttons.primarySmall}
        >
          Add License
        </Button>
      </Box>
    </>
  );
};

export default ModalButtons;
