import { Box, Button, Text, useTheme } from '@chakra-ui/react';
import React, { useState } from 'react';
import ToggleSwitch from '../../TabsComponent/Plugins/ToggleSwitch';
import EditPluginVersion from '../Versions/EditPluginVersion';
import AddNewVersion from '../Versions/AddNewVersion';
import { Plugin } from '../../../types/plugins';
import { useUpdatePlugin } from '../../../hooks/usePlugins';
import PluginVersions from '../Versions/PluginVersions';

interface IProps {
  plugin: Plugin;
}

const PluginDetails: React.FC<IProps> = ({ plugin }: IProps) => {
  const theme = useTheme();
  const { mutate: updatePlugin } = useUpdatePlugin();

  const [editPlugin, setEditPlugin] = useState(false);
  const [editVersion, setEditVersion] = useState(false);
  const [editVersionState, seteditVersionState] = useState({
    version: plugin.latest_version,
    description: plugin.plugin_description,
    file: null,
  });

  const handleUpdateClick = () => {
    setEditPlugin((prev) => !prev);
  };

  const BoxStyles = {
    minHeight: '860px',
    width: '100%',
    background: theme.colors.white,
    border: `3px solid ${theme.colors.secondaryLight}`,
    padding: '20px 25px',
  };

  const trashPlugin = () => {
    const { created_at, updated_at, ...rest } = plugin;
    updatePlugin({ ...rest, is_trash: true });
  };

  return (
    <Box sx={BoxStyles}>
      <Text
        borderBottom={`3px solid ${theme.colors.secondary}`}
        sx={theme.fonts.h1}
      >
        {plugin.plugin_name}
      </Text>
      <br />
      <ToggleSwitch
        isActive={plugin.is_active}
        switchHandler={(checked) => {
          const { created_at, updated_at, ...rest } = plugin;
          updatePlugin({ ...rest, is_active: checked });
        }}
      />
      <AddNewVersion />

      {editPlugin ? (
        <EditPluginVersion
          editVersion={editVersion}
          setEditVersion={setEditVersion}
        />
      ) : (
        <PluginVersions plugin={plugin} />
      )}

      <Box mt="19px">
        <Text sx={theme.fonts.subHeading}>Slug</Text>
        <Text mt="4px" sx={theme.fonts.paragraph}>
          {plugin.plugin_slug}
        </Text>
      </Box>

      <Box mt="30px">
        {editPlugin ? (
          <Button
            onClick={handleUpdateClick}
            sx={theme.buttons.primary}
            height="none"
            fontSize="22px"
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={handleUpdateClick}
            sx={theme.buttons.primary}
            height="none"
            fontSize="22px"
          >
            Edit
          </Button>
        )}
        <Button
          onClick={trashPlugin}
          mt="11px"
          sx={theme.buttons.delete}
          height="none"
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default PluginDetails;
