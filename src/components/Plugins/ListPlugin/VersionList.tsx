import {
  Box,
  Button,
  ListItem,
  Text,
  UnorderedList,
  useTheme,
} from '@chakra-ui/react';
import React from 'react';

const Versionlist: React.FC<any> = ({ version }: any) => {
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
          <Text sx={theme.fonts.tealParagraph}>{version.version}</Text>
          <Text sx={theme.fonts.tealParagraph}>{version.date}</Text>
          <UnorderedList mt="5px" lineHeight="normal">
            {version.description?.map((item: any, i: number) => (
              <ListItem key={i}>{item.text}</ListItem>
            ))}
          </UnorderedList>
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
      <br />
    </>
  );
};

export default Versionlist;
