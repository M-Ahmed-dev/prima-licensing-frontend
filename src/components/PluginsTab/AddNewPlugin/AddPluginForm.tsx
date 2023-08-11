import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  Textarea,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  handleSecondBoxClick: () => void;
}

const AddPluginForm: React.FC<Props> = ({ handleSecondBoxClick }) => {
  const theme = useTheme();
  return (
    <>
      <FormControl>
        <Box>
          <Text sx={theme.fonts.subHeading}>Plugin name</Text>
          <Input
            variant="flushed"
            placeholder="Add name"
            color={theme.colors.secondary}
            fontWeight="500"
            borderBottom="3px solid"
            paddingLeft="16px"
          />
        </Box>
        <Box mt="10px">
          <Text sx={theme.fonts.subHeading}>Plugin Slug</Text>
          <Input
            variant="flushed"
            placeholder="Add Slug"
            color={theme.colors.secondary}
            fontWeight="500"
            borderBottom="3px solid"
            paddingLeft="16px"
          />
        </Box>

        <Box mt="10px">
          <Text sx={theme.fonts.subHeading}>Latest Version</Text>
          <Input
            variant="flushed"
            placeholder="Add version number"
            color={theme.colors.secondary}
            fontWeight="500"
            borderBottom="3px solid"
            paddingLeft="16px"
          />
        </Box>

        <Box mt="30px">
          <Text sx={theme.fonts.subHeading}>Version Description</Text>
          <Textarea
            placeholder="Add description of the number"
            sx={{
              border: "4px solid #39808B",
              borderRadius: "none",
              color: "#39808B",
              height: "254px",
              marginTop: "15px",
            }}
          />
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
          onClick={handleSecondBoxClick}
          mt="11px"
          sx={theme.buttons.delete}
          height="none"
        >
          Discard
        </Button>
      </Box>
    </>
  );
};

export default AddPluginForm;
