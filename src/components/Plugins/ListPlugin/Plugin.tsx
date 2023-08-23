import { Box, Button, Text, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import ToggleSwitch from "../../TabsComponent/Plugins/ToggleSwitch";
import VersionHistory from "../Versions/VersionHistory";
import PrimaDescriptionList from "../Versions/PrimaDescriptionList";
import AddNewVersion from "../Versions/AddNewVersion";
import { Plugin } from "../../../types/plugins";

interface IProps {
  plugin: Plugin
}

const PluginDetails: React.FC<IProps> = ({ plugin }: IProps) => {
  const theme = useTheme();

  const [showNewUpdate, setUpdate] = useState(false);

  const handleUpdateClick = () => {
    setUpdate((showNewUpdate) => !showNewUpdate);
  };

  const BoxStyles = {
    minHeight: "860px",
    width: "100%",
    background: theme.colors.white,
    border: `3px solid ${theme.colors.secondaryLight}`,
    padding: "20px 25px",
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
      <ToggleSwitch isActive={plugin.is_active} />
      <AddNewVersion />

      {showNewUpdate ? (
        <VersionHistory />
      ) : (
        <PrimaDescriptionList plugin={plugin} />
      )}

      <Box mt='19px'>
        <Text sx={theme.fonts.subHeading}>Slug</Text>
        <Text mt='4px' sx={theme.fonts.paragraph}>
          {plugin.plugin_slug}
        </Text>
      </Box>

      <Box mt='30px'>
        {showNewUpdate ? (
          <Button
            onClick={handleUpdateClick}
            sx={theme.buttons.primary}
            height='none'
            fontSize='22px'
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={handleUpdateClick}
            sx={theme.buttons.primary}
            height='none'
            fontSize='22px'
          >
            Edit
          </Button>
        )}
        <Button mt='11px' sx={theme.buttons.delete} height='none'>
          Delete
        </Button>
      </Box>
    </Box >
  );
};

export default PluginDetails;
