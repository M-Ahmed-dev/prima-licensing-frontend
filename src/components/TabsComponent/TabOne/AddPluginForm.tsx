import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
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
          <FormLabel sx={theme.fonts.subHeading}>Plugin name</FormLabel>
          <Input
            variant="flushed"
            placeholder="name"
            color={theme.colors.secondary}
            fontWeight="500"
            borderBottom="3px solid"
          />
        </Box>
        <Box mt="10px">
          <FormLabel sx={theme.fonts.subHeading}>Plugin slug</FormLabel>
          <Input
            variant="flushed"
            placeholder="name"
            color={theme.colors.secondary}
            fontWeight="500"
            borderBottom="3px solid"
          />
        </Box>

        <Box mt="10px">
          <FormLabel sx={theme.fonts.subHeading}>Latest Version</FormLabel>
          <Input
            variant="flushed"
            placeholder="name"
            color={theme.colors.secondary}
            fontWeight="500"
            borderBottom="3px solid"
          />
        </Box>

        <Box mt="30px">
          <FormLabel sx={theme.fonts.subHeading}>Version description</FormLabel>
          <Textarea
            placeholder="Here is a sample placeholder"
            sx={{
              border: "3px solid #39808B",
              borderRadius: "none",
              color: "#39808B",
              height: "190px",
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
