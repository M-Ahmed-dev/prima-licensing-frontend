import {
  Box,
  Button,
  ListItem,
  Text,
  UnorderedList,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

const UpdatedList: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        mt="9px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Text sx={theme.fonts.tealParagraph}>2.2.5</Text>
          <Text sx={theme.fonts.tealParagraph}>20.06.2023</Text>
        </Box>
        <Button maxWidth="134px" sx={theme.buttons.secondarySmall}>
          Download
        </Button>
      </Box>
      <UnorderedList mt="5px" lineHeight="normal">
        <ListItem>bug fixes</ListItem>
        <ListItem>added text</ListItem>
      </UnorderedList>
    </>
  );
};

export default UpdatedList;
