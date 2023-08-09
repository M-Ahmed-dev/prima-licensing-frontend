import { Box, Link, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import PastUpdates from "./PastUpdates";
import UpdatedList from "./UpdatedList";

const PrimaDescriptionList: React.FC = () => {
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
        <PastUpdates />
      </Box>

      <Box mt="12px">
        <Link
          fontWeight="600"
          fontFamily="Roboto"
          fontSize="15px"
          color={theme.colors.secondaryLight}
        >
          Show all past updates
        </Link>
      </Box>
    </>
  );
};

export default PrimaDescriptionList;
