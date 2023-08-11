import { Box, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import AddNewPlugin from "./AddNewPlugin";
import AddPluginForm from "./AddPluginForm";

const ShowPlugin: React.FC = () => {
  const theme = useTheme();
  const [showNewBox, setShowNewBox] = useState(false);

  const handleSecondBoxClick = () => {
    setShowNewBox((prevShowNewBox) => !prevShowNewBox);
  };

  const BoxStyles = {
    width: "537px",
    minHeight: "860px",

    background: theme.colors.white,
    border: `3px solid ${theme.colors.secondaryLight}`,
    padding: "20px 25px",
  };

  return (
    <>
      {showNewBox ? (
        <Box sx={BoxStyles}>
          <AddPluginForm handleSecondBoxClick={handleSecondBoxClick} />
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={BoxStyles}
        >
          <AddNewPlugin handleSecondBoxClick={handleSecondBoxClick} />
        </Box>
      )}
    </>
  );
};

export default ShowPlugin;
