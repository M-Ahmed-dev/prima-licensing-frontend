import { Box, Button, useTheme } from "@chakra-ui/react";

import React from "react";

interface SearchButtonsProps {
  handleClick: () => void;
}
const SearchButtons: React.FC<SearchButtonsProps> = ({ handleClick }) => {
  const theme = useTheme();

  const basicButtonStyles = {
    maxWidth: "200px",
    fontSize: "18px",
  };

  return (
    <Box marginLeft="auto" display="flex" alignItems="center" gap="11px">
      <Button
        sx={{
          ...theme.buttons.secondarySmall,
          ...basicButtonStyles,
        }}
        border={`3px solid ${theme.colors.secondary}`}
      >
        Show Demos
      </Button>
      <Button
        sx={{
          ...theme.buttons.secondarySmall,
          ...basicButtonStyles,
        }}
        border={`3px solid ${theme.colors.secondary}`}
      >
        Export CSV
      </Button>
      <Button
        sx={{ ...theme.buttons.primarySmall, ...basicButtonStyles }}
        onClick={handleClick}
      >
        Add License
      </Button>
    </Box>
  );
};

export default SearchButtons;
