import { Box, Text, useTheme } from "@chakra-ui/react";
import React from "react";

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
          <svg
            width="193"
            height="193"
            viewBox="0 0 193 193"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.2" cx="96.5" cy="96.5" r="96.5" fill="#56C5D0" />
            <path
              d="M97 52L97 140"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M53 96L141 96"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </Box>
        <Text textAlign="center" mt="50px" sx={theme.fonts.paragraph}>
          Add New Plugin
        </Text>
      </Box>
    </>
  );
};

export default AddNewPlugin;
