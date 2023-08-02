import { Box, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import addPlugin from "../../../assets/addplugin.svg";

interface Props {
  handleSecondBoxClick: () => void;
}

const AddNewPlugin: React.FC<Props> = ({ handleSecondBoxClick }) => {
  const theme = useTheme();

  const mainContainer = {
    display: "block",
    margin: "0 auto",
    cursor: "pointer",
    transformOrigin: "50% 50%",
    transition: "all 0.3s ease 0s",

    ":hover": {
      transform: "scale(1.2)",
    },
  };

  return (
    <>
      <Box onClick={handleSecondBoxClick}>
        <Box sx={mainContainer}>
          <img src={addPlugin} alt="add plugin" />
        </Box>
        <Text textAlign="center" mt="50px" sx={theme.fonts.paragraph}>
          Add New Plugin
        </Text>
      </Box>
    </>
  );
};

export default AddNewPlugin;
