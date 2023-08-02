import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useTheme,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Add from "../../../assets/Add.svg";

interface Props {
  handleUpdateClick: () => void;
}

const UpdateForm: React.FC<Props> = ({ handleUpdateClick }) => {
  const theme = useTheme();

  const [showVersion, setShowVersion] = useState(false);

  const handleClickVersion = () => {
    setShowVersion((showVersion) => !showVersion);
  };

  return (
    <>
      <Box>
        <Text sx={theme.fonts.h1}>Priima Integration</Text>
        <Box
          sx={{
            border: `2px solid ${theme.colors.secondary}`,
          }}
        ></Box>
        <Box mt="21px">
          <ToggleSwitch />
        </Box>

        <Box>
          <Text mt="17px" sx={theme.fonts.subHeading}>
            Version History
          </Text>

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
                <Button sx={theme.buttons.addZip}>Add Zip</Button>
                <Button
                  sx={theme.buttons.discardSm}
                  onClick={handleClickVersion}
                >
                  Discard
                </Button>
                <Button sx={theme.buttons.saveSm}>Save</Button>
              </Box>
            </Box>
          ) : (
            <>
              <Box
                onClick={handleClickVersion}
                cursor="pointer"
                mt="8px"
                display="flex"
                gap="9px"
              >
                <img src={Add} alt="add version" />
                <Text sx={theme.fonts.paragraph}>Add version</Text>
              </Box>
            </>
          )}
        </Box>

        <Box
          mt="16px"
          sx={{
            border: `3px solid ${theme.colors.secondary}`,
            padding: "11px 14px",
          }}
        >
          <Text sx={theme.fonts.tealParagraph}>2.2.5</Text>
          <Text color={theme.colors.secondary}>20.06.2023</Text>
          <UnorderedList>
            <ListItem>updated language</ListItem>
            <ListItem>changed label</ListItem>
          </UnorderedList>
          <Box display="flex" gap="10px" mt="16px">
            <Button sx={theme.buttons.secondarySmall}>Edit File</Button>
            <Button sx={theme.buttons.primarySmall}>Download</Button>
          </Box>
        </Box>
        <Box
          mt="16px"
          sx={{
            border: `3px solid ${theme.colors.secondary}`,
            padding: "11px 14px",
          }}
        >
          <Text sx={theme.fonts.tealParagraph}>2.2.5</Text>
          <Text color={theme.colors.secondary}>20.06.2023</Text>
          <UnorderedList>
            <ListItem>updated language</ListItem>
          </UnorderedList>
          <Box display="flex" gap="10px" mt="16px">
            <Button sx={theme.buttons.secondarySmall}>Edit File</Button>
            <Button sx={theme.buttons.primarySmall}>Download</Button>
          </Box>
        </Box>

        <Box mt="11px">
          <Link sx={theme.fonts.tealParagraph}>Show more</Link>
        </Box>

        <FormControl>
          <Box mt="16px">
            <FormLabel sx={theme.fonts.subHeading}>Slug</FormLabel>
            <Input
              variant="flushed"
              placeholder="x.x.x"
              color={theme.colors.secondary}
              fontWeight="500"
              borderBottom="3px solid"
            />
          </Box>
          <Box mt="16px">
            <FormLabel sx={theme.fonts.subHeading}>Attached ZIP</FormLabel>-
          </Box>
        </FormControl>

        <Box mt="30px">
          <Button sx={theme.buttons.secondary} height="none">
            Browse Files
          </Button>
          <Button mt="11px" sx={theme.buttons.primary} height="none">
            Update
          </Button>
          <Button
            onClick={handleUpdateClick}
            mt="11px"
            sx={theme.buttons.delete}
            height="none"
          >
            Discard
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UpdateForm;
