import {
  Box,
  Button,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

const VersionHistory: React.FC = () => {
  const theme = useTheme();

  const data = [
    {
      version: "2.2.5",
      date: "20.06.2023",
      changes: ["bug fixes", "added text"],
    },
    {
      version: "2.2.5",
      date: "20.06.2023",
      changes: ["bug fixes", "language added", "added text"],
    },
  ];

  return (
    <>
      <Text mt="17px" sx={theme.fonts.subHeading}>
        Version History
      </Text>

      {data.map((boxData, index) => (
        <>
          <Box
            key={index}
            mt="16px"
            sx={{
              border: `3px solid ${theme.colors.secondary}`,
              padding: "11px 14px",
              maxWidth: "471px",
            }}
          >
            <Text sx={theme.fonts.tealParagraph}>{boxData.version}</Text>
            <Text color={theme.colors.secondary}>{boxData.date}</Text>
            <UnorderedList>
              {boxData.changes.map((change, i) => (
                <ListItem key={i}>{change}</ListItem>
              ))}
            </UnorderedList>
            <Box display="flex" gap="10px" mt="16px">
              <Button sx={theme.buttons.primarySmall}>Download</Button>
              <Button
                border="3px solid #39808B"
                textTransform="uppercase"
                sx={theme.buttons.secondarySmall}
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

export default VersionHistory;
