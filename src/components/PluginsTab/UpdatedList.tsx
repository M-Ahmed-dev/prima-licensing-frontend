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
            sx={theme.fonts.versionDate}
            color={theme.colors.secondaryLight}
          >
            2.2.5
          </Text>
          <Text fontWeight="600" fontSize="18px" sx={theme.fonts.versionDate}>
            20.06.2023
          </Text>
        </Box>
        <Button
          border="4px solid #39808B"
          maxWidth="134px"
          fontSize="18px"
          textTransform="uppercase"
          fontFamily="Roboto"
          fontWeight="500"
          sx={theme.buttons.secondarySmall}
        >
          Download
        </Button>
      </Box>
      <UnorderedList mt="5px" ml="20px" sx={theme.fonts.unorderedList}>
        <ListItem fontSize="18px">bug fixes</ListItem>
        <ListItem fontSize="18px">languages added</ListItem>
      </UnorderedList>
    </>
  );
};

export default UpdatedList;
