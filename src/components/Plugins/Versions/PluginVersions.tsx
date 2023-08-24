import { Box, Link, Text, useTheme } from '@chakra-ui/react';
import React from 'react';
import { formatDate } from '../../../utils/formatDate';
import { Plugin } from '../../../types/plugins';
import Versionlist from '../ListPlugin/VersionList';

interface IProps {
  plugin: Plugin;
}
const PluginVersions: React.FC<IProps> = ({ plugin }: IProps) => {
  const theme = useTheme();

  const versionsList = [
    {
      version: plugin.latest_version,
      isLatest: true,
      date: formatDate(plugin.created_at),
      description: [
        { text: plugin.plugin_description },
        { text: 'added text' },
      ],
    },
    {
      version: '2.2.91',
      isLatest: false,
      date: '20.06.2026',
      description: [{ text: 'bug fixes' }, { text: 'added text' }],
    },
  ];

  return (
    <>
      <Box mt="24px">
        <Text sx={theme.fonts.subHeading}>Created</Text>
        <Text sx={theme.fonts.paragraph}>
          {formatDate(plugin.created_at)}
        </Text>
      </Box>

      <Box mt="24px">
        <Text sx={theme.fonts.subHeading}>Updated</Text>
        {versionsList?.map((version) => (
          <Versionlist key={version.version} version={version} />
        ))}
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

export default PluginVersions;
