import React, { useState } from "react";
import { Box, Button, useTheme, Text, Input } from "@chakra-ui/react";

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
              <Text fontWeight="700" sx={theme.fonts.tealParagraph}>
                Version
              </Text>
              <Input
                sx={{
                  borderBottom: "3px solid #39808B",
                }}
                variant="flushed"
                placeholder="add version"
              />
            </Box>

            <Box mt="10px">
              <Text fontWeight="700" sx={theme.fonts.tealParagraph}>
                Description
              </Text>
              <Input
                sx={{
                  borderBottom: "3px solid #39808B",
                }}
                variant="flushed"
                placeholder="add description"
              />
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
