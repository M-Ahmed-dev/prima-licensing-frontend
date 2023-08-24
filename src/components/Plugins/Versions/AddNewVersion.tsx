import React, { useEffect, useReducer, useState } from 'react';
import { Box, Button, useTheme, Text, Input } from '@chakra-ui/react';
import FileUpload from '../../FileUpload';

const AddNewVersion = ({ version, isEdit }: any) => {
  const theme = useTheme();
  const [showVersionForm, setShowVersionForm] = useState(false);
  const [versionPayload, setVersionPayload] = useReducer(
    (state: any, newState: Partial<any>) => ({
      ...state,
      ...newState,
    }),
    {
      version: '',
      version_description: '',
      file: File,
    }
  );

  useEffect(() => {
    if (isEdit) setVersionPayload({ ...version });
  }, [version]);

  const handleClickVersion = () => {
    setShowVersionForm((showVersionForm) => !showVersionForm);
  };

  return (
    <>
      <Box>
        {showVersionForm ? (
          <Box
            mt="16px"
            sx={{
              border: `3px solid ${theme.colors.secondary}`,
              padding: '11px 20px',
            }}
          >
            <Box>
              <Text fontWeight="700" sx={theme.fonts.tealParagraph}>
                Version
              </Text>
              <Input
                name="version"
                value={versionPayload.version}
                onChange={(e) => setVersionPayload({ version: e.target.value })}
                sx={{
                  borderBottom: '3px solid #39808B',
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
                  borderBottom: '3px solid #39808B',
                }}
                name="version_description"
                value={versionPayload.version_description}
                onChange={(e) =>
                  setVersionPayload({ version_description: e.target.value })
                }
                variant="flushed"
                placeholder="add description"
              />
            </Box>

            <Box display="flex" gap="10px" mt="13px">
              <FileUpload >
                <Button
                  border={`3px solid ${theme.colors.secondary}`}
                  sx={theme.buttons.addZip}
                >
                  Browse File
                </Button>
              </FileUpload>
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
