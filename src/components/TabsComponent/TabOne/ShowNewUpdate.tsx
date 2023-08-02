import { Box, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import PrimaIntegrationBtns from "./AddNewVersion/PrimaIntegrationBtns";
import PrimaIntegration from "./PrimaIntegration";
import PrimaList from "./PrimaList";
import UpdateForm from "./UpdateForm";

const ShowNewUpdate: React.FC = () => {
  const theme = useTheme();

  const [showNewUpdate, setUpdate] = useState(false);

  const handleUpdateClick = () => {
    setUpdate((showNewUpdate) => !showNewUpdate);
  };
  const BoxStyles = {
    maxWidth: "537px",
    width: "100%",
    background: theme.colors.white,
    border: `3px solid ${theme.colors.secondaryLight}`,
    padding: "20px 25px",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={BoxStyles}
    >
      {showNewUpdate ? (
        <>
          <UpdateForm />
          <PrimaIntegrationBtns handleUpdateClick={handleUpdateClick} />
        </>
      ) : (
        <>
          <PrimaIntegration />
          <PrimaList handleUpdateClick={handleUpdateClick} />
        </>
      )}
    </Box>
  );
};

export default ShowNewUpdate;
