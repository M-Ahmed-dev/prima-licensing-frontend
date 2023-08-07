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
              padding: "11px 14px",
            }}
          >
            <Box>
              <Text sx={theme.fonts.tealParagraph}>Version</Text>
              <Text sx={theme.fonts.tealParagraph}>2.2.5</Text>
            </Box>
            <Box mt="10px">
              <Text sx={theme.fonts.tealParagraph}>Add details</Text>
              <UnorderedList>
                <ListItem>updated language</ListItem>
              </UnorderedList>
            </Box>

            <Box display="flex" gap="10px" mt="13px">
              <Button
                border={`3px solid ${theme.colors.secondary}`}
                sx={theme.buttons.addZip}
              >
                Add Zip
              </Button>
              <Button sx={theme.buttons.discardSm} onClick={handleClickVersion}>
                Discard
              </Button>
              <Button sx={theme.buttons.saveSm}>Save</Button>
            </Box>
          </Box>
        ) : (
          <Box maxWidth="214px">
            <Button
              onClick={handleClickVersion}
              cursor="pointer"
              mt="5px"
              display="flex"
              justifyContent="space-around"
              fontSize="18px"
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
