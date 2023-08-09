import React, { useState } from "react";
import {
  Box,
  Button,
  useTheme,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const AddNewVersion = () => {
  const theme = useTheme();

  const [showVersion, setShowVersion] = useState(false);

  const handleClickVersion = () => {
    setShowVersion((showVersion) => !showVersion);
  };

  return (
    <>
      <Box>
        {showVersion ? (
          <Box
            mt="16px"
            sx={{
              border: `3px solid ${theme.colors.secondary}`,
              padding: "11px 20px",
            }}
          >
            <Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontWeight="700" sx={theme.fonts.tealParagraph}>
                  Version
                </Text>
                <Text fontWeight="700" mt="5px" sx={theme.fonts.tealParagraph}>
                  2.2.5
                </Text>
              </Box>
              <Text mt="5px" sx={theme.fonts.tealParagraph}>
                20.03.2023
              </Text>
            </Box>

            <Box mt="10px">
              <Text fontWeight="700" sx={theme.fonts.tealParagraph}>
                Description
              </Text>
              <UnorderedList mt="5px" color={theme.colors.secondary}>
                <ListItem>updated language</ListItem>
                <ListItem>updated language</ListItem>
                <ListItem>updated language</ListItem>
              </UnorderedList>
            </Box>

            <Box display="flex" gap="10px" mt="13px">
              <Button
                border={`3px solid ${theme.colors.secondary}`}
                sx={theme.buttons.addZip}
              >
                Browse File
              </Button>
              <Button sx={theme.buttons.discardSm} onClick={handleClickVersion}>
                Discard
              </Button>
              <Button sx={theme.buttons.saveSm}>Save</Button>
            </Box>
          </Box>
        ) : (
          <Box width="214px">
            <Button
              onClick={handleClickVersion}
              cursor="pointer"
              mt="20px"
              display="flex"
              height="43px"
              fontWeight="700"
              gap="10px"
              alignItems="center"
              fontSize="20px"
              sx={theme.buttons.primarySmall}
            >
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#FEFEFE"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2L8 14"
                    stroke="#FEFEFE"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 8L14 8"
                    stroke="#FEFEFE"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              New version
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default AddNewVersion;
