import { Box, Text, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import DomainSection from "./DomainSection";
import ModalButtons from "./ModalButtons";
import NoteSection from "./NoteSection";
import StartDateSection from "./StartDateSection";
import DropDownSelector from "./DropDownSelector/DropDownSelector";
import ContactTags from "./ContactTags";

interface Props {
  handleClick: () => void;
}

const AddLicense: React.FC<Props> = ({ handleClick }) => {
  const theme = useTheme();

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedTutor, setSelectedTutor] = useState("");

  const checkboxData = ["Pekka Kussi", "Antero Heino", "Matti Meikäläinen"];
  const tutorNames = ["Annuka Hupli", "Filipa Howard", "Eisenberg Stewart"];

  const handleSelect = (selected: string) => {
    setSelectedValue(selected);
  };

  const handleTutorSelect = (selected: string) => {
    setSelectedTutor(selected);
  };

  const boxStyles = {
    border: "3px solid #39808B",
    display: "flex",
  };

  return (
    <>
      <Box sx={boxStyles}>
        <Box height='100%' padding='35px'>
          <Text color={theme.colors.secondary} fontSize='25px' fontWeight='700'>
            Contacts
          </Text>

          <Box display='flex' gap='20px' mt='38px' alignItems='self-start'>
            <DropDownSelector
              data={tutorNames}
              onSelect={handleTutorSelect}
              selectedValue={selectedTutor}
              selectName='Tutor'
            />

            <DropDownSelector
              data={checkboxData}
              onSelect={handleSelect}
              selectedValue={selectedValue}
              selectName='Company Contacts'
            />
          </Box>
          <ContactTags />
        </Box>

        <Box padding='30px' width='100%' borderLeft='3px solid #39808B'>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "self-start",
              flexWrap: "wrap",
            }}
          >
            <DomainSection />
            <StartDateSection />
            <NoteSection />
          </Box>

          <ModalButtons handleClick={handleClick} />
        </Box>
      </Box>
    </>
  );
};

export default AddLicense;
