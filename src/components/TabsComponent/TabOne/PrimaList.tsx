import { Box, Button, Link, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import UpdatedList from "./UpdatedList";

interface Props {
  handleUpdateClick: () => void;
}

const PrimaList: React.FC<Props> = ({ handleUpdateClick }) => {
  const theme = useTheme();
  return (
    <>
      <Box mt="24px">
        <Text sx={theme.fonts.subHeading}>Created</Text>
        <Text sx={theme.fonts.paragraph}>27.01.2022</Text>
      </Box>

      <Box mt="24px">
        <Text sx={theme.fonts.subHeading}>Updated</Text>
        <UpdatedList />
      </Box>

      <Box mt="24px">
        <UpdatedList />
      </Box>

      <Box mt="12px">
        <Link fontWeight="700" color={theme.colors.secondaryLight}>
          Show all past updates
        </Link>
      </Box>

      <Box mt="19px">
        <Text sx={theme.fonts.subHeading}>Slug</Text>
        <Text sx={theme.fonts.paragraph}>priima-lms-integration</Text>
      </Box>

      <Box mt="30px">
        <Button
          onClick={handleUpdateClick}
          sx={theme.buttons.primary}
          height="none"
          fontSize="22px"
        >
          Edit
        </Button>
        <Button mt="11px" sx={theme.buttons.delete} height="none">
          Delete
        </Button>
      </Box>
    </>
  );
};

export default PrimaList;
