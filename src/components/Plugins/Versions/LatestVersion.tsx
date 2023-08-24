import {
  Box,
  Button,
  ListItem,
  Text,
  UnorderedList,
  useTheme,
} from '@chakra-ui/react';

const LatestVersion = ({ version }: any) => {
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
        </Box>
        <Button maxWidth="134px" sx={theme.buttons.secondarySmall}>
          Download
        </Button>
      </Box>
      <UnorderedList mt="5px" lineHeight="normal">
        {version.description.map((item: any, i: number) => (
          <ListItem key={i}>{item.text}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default LatestVersion;
