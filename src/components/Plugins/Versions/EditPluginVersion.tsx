import {
  Box,
  Button,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useTheme,
} from '@chakra-ui/react';
import React from 'react';
import AddNewVersion from './AddNewVersion';

const EditPlugin: React.FC<any> = ({ editVersion, setEditVersion }: any) => {
  const theme = useTheme();

  const versions = [
    {
      version: '2.2.5',
      versionStatus: 'Current',
      date: '20.06.2023',
      changes: ['bug fixes', 'added text'],
    },
    {
      version: '2.2.5',
      date: '20.06.2023',
      versionStatus: ' ',
      changes: ['bug fixes', 'language added', 'added text'],
    },
  ];

  return (
    <>
      <Text mt="17px" sx={theme.fonts.subHeading}>
        Version History
      </Text>
      {versions.map((version, index) => (
        <>
          <Box
            key={index}
            mt="16px"
            sx={{
              border: `3px solid ${theme.colors.secondary}`,
              padding: '11px 14px',
              maxWidth: '471px',
            }}
          >
            <Box display="flex" justifyContent="space-between">
              <Text
                fontFamily="Inter"
                fontWeight="700"
                sx={theme.fonts.tealParagraph}
              >
                {version.version}
              </Text>
              <Text
                textTransform="uppercase"
                fontWeight="700"
                fontSize="16px"
                fontFamily="Inter"
                sx={theme.fonts.tealParagraph}
              >
                {version.versionStatus}
              </Text>
            </Box>
            <Text
              fontFamily="Inter"
              fontWeight="600"
              sx={theme.fonts.tealParagraph}
            >
              {version.date}
            </Text>
            <UnorderedList mt="10px" ml="20px" sx={theme.fonts.unorderedList}>
              {version.changes.map((change, i) => (
                <ListItem key={i}>{change}</ListItem>
              ))}
            </UnorderedList>
            <Box display="flex" gap="10px" mt="16px">
              <Button sx={theme.buttons.primarySmall}>Download</Button>
              <Button
                border="3px solid #39808B"
                textTransform="uppercase"
                sx={theme.buttons.secondarySmall}
                onClick={() => {
                  setEditVersion(true);
                  console.log({ version });
                }}
              >
                Edit version
              </Button>
            </Box>
          </Box>
        </>
      ))}
      <Box mt="11px">
        <Link sx={theme.fonts.tealParagraph}>Show more</Link>
      </Box>
    </>
  );
};

export default EditPlugin;
