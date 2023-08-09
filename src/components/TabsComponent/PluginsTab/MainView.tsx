import { Box, Button, Text, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import AddNewVersion from "./AddNewVersion/AddNewVersion";
import VersionHistory from "./AddNewVersion/VersionHistory";
import PrimaDescriptionList from "./PrimaDescriptionList";

const MainView: React.FC = () => {
  const theme = useTheme();

  const [showNewUpdate, setUpdate] = useState(false);

  const handleUpdateClick = () => {
    setUpdate((showNewUpdate) => !showNewUpdate);
  };

  return (
    <>
      <Text
        borderBottom={`3px solid ${theme.colors.secondary}`}
        sx={theme.fonts.h1}
      >
        priima integration
      </Text>

      <ToggleSwitch />
      <AddNewVersion />

      {showNewUpdate ? (
        <>
          <VersionHistory />
        </>
      ) : (
        <>
          <PrimaDescriptionList />
        </>
      )}

      <Box mt="19px">
        <Text sx={theme.fonts.subHeading}>Slug</Text>
        <Text mt="4px" sx={theme.fonts.paragraph}>
          priima-lms-integration
        </Text>
      </Box>

      <Box mt="30px">
        {showNewUpdate ? (
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
        <Button mt="11px" sx={theme.buttons.delete} height="none">
          Delete
        </Button>
      </Box>
    </>
  );
};

export default MainView;
