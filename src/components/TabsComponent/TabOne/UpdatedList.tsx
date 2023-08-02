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
          <Text
            fontWeight="700"
            fontSize="18px"
            color={theme.colors.secondaryLight}
          >
            2.2.5
          </Text>
          <Text fontSize="18px" color={theme.colors.secondaryLight}>
            20.06.2023
          </Text>
        </Box>
        <Button
          border="3px solid #39808B"
          maxWidth="134px"
          fontSize="18px"
          textTransform="uppercase"
          fontWeight="600"
          sx={theme.buttons.secondarySmall}
        >
          Download
        </Button>
      </Box>
      <UnorderedList mt="5px" lineHeight="normal">
        <ListItem fontSize="18px">bug fixes</ListItem>
        <ListItem fontSize="18px">added text</ListItem>
      </UnorderedList>
    </>
  );
};

export default UpdatedList;
