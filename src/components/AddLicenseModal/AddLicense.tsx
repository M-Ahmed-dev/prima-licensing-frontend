import { Box, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import AddSectionOne from "./AddSectionOne";
import AddSectionThree from "./AddSectionThree";
import AddSectionTwo from "./AddSectionTwo";
import ModalButtons from "./ModalButtons";
import CompanyContacts from "./OptionSelectors/CompanyContacts";
import TagsSelect from "./OptionSelectors/TagsSelect";
import TutorSelect from "./OptionSelectors/TutorSelect";

interface Props {
  handleClick: () => void;
}

const AddLicense: React.FC<Props> = ({ handleClick }) => {
  const theme = useTheme();

  const boxStyles = {
    border: "3px solid #39808B",
    display: "flex",
  };

  return (
    <>
      <Box sx={boxStyles}>
        <Box height="100%" padding="35px">
          <Text color={theme.colors.secondary} fontSize="25px" fontWeight="700">
            Contacts
          </Text>

          <Box display="flex" gap="20px" mt="38px" alignItems="self-start">
            <TutorSelect />
            <CompanyContacts />
          </Box>
          <TagsSelect />
        </Box>

        <Box padding="30px" width="100%" borderLeft="3px solid #39808B">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "self-start",
            }}
          >
            <AddSectionOne />
            <AddSectionTwo />
            <AddSectionThree />
          </Box>

          <ModalButtons handleClick={handleClick} />
        </Box>
      </Box>
    </>
  );
};

export default AddLicense;
