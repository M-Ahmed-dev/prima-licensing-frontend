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
          <>
            <Button
              onClick={handleClickVersion}
              cursor="pointer"
              mt="18px"
              display="flex"
              gap="9px"
              fontSize="18px"
              maxWidth="214px"
              sx={theme.buttons.primarySmall}
            >
              <div>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 16 16"
                  fill="#FEFEFE"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 2L8 14" stroke="#FEFEFE" />
                  <path d="M2 8L14 8" stroke="#FEFEFE" />
                </svg>
              </div>
              New version
            </Button>
          </>
        )}
      </Box>
    </>
  );
};

export default AddNewVersion;
