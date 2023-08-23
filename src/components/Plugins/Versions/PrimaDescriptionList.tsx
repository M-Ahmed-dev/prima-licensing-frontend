import { Box, Link, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import PastUpdates from "./PastUpdates";
import { formatDate } from "../../../utils/formatDate";
import { Plugin } from "../../../types/plugins";
import Versionlist from "../ListPlugin/VersionList";

interface IProps {
  plugin: Plugin
}
const PrimaDescriptionList: React.FC<IProps> = ({ plugin }: IProps) => {
  const theme = useTheme();
  return (
    <>
      <Box mt='24px'>
        <Text sx={theme.fonts.subHeading}>Created</Text>
        <Text sx={theme.fonts.paragraph}>{formatDate(plugin.created_at)}</Text>
      </Box>

      <Box mt='24px'>
        <Text sx={theme.fonts.subHeading}>Updated</Text>
        <Versionlist />
        <PastUpdates />
      </Box>

      <Box mt='12px'>
        <Link
          fontWeight='600'
          fontFamily='Roboto'
          fontSize='15px'
          color={theme.colors.secondaryLight}
        >
          Show all past updates
        </Link>
      </Box>
    </>
  );
};

export default PrimaDescriptionList;
