import { Box, Select, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import AddSectionOne from "../PrimaIntegrationTable/AddSectionOne";
import AddSectionThree from "../PrimaIntegrationTable/AddSectionThree";
import AddSectionTwo from "../PrimaIntegrationTable/AddSectionTwo";
import ModalButtons from "../PrimaIntegrationTable/ModalButtons";
// import ModalButtons from "./ModalButtons";

interface Props {
  handleClick: () => void;
}

const AddLicense: React.FC<Props> = ({ handleClick }) => {
  const theme = useTheme();

  const boxStyles = {
    border: "3px solid #39808B",
    display: "flex",
  };

  const SelectStyles = {
    borderRadius: "none",
    border: "3px solid #39808B",
    color: theme.colors.secondary,
  };

  return (
    <>
      <Box sx={boxStyles}>
        <Box height="100%" padding="35px">
          <Text color={theme.colors.secondary} fontSize="25px" fontWeight="700">
            Contacts
          </Text>

          <Box display="flex" gap="20px" mt="38px" alignItems="end">
            <Box minWidth="298px">
              <Select sx={SelectStyles} placeholder="TUTORS contacts">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box minWidth="298px">
              <Select sx={SelectStyles} placeholder="Company Contacts">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
          </Box>
          <Box width="219px" mt="25px">
            <Text mb="7px" sx={theme.fonts.subHeading}>
              Contact Tags
            </Text>
            <Select sx={SelectStyles} placeholder="No tags selected">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>

        <Box padding="30px" width="100%" borderLeft="3px solid #39808B">
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            flexWrap="wrap"
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
