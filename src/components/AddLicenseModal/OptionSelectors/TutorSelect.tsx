import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useTheme,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CompanyContacts: React.FC = () => {
  const theme = useTheme();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const checkBoxStyle = {
    ".chakra-checkbox__control": {
      border: `2px solid ${theme.colors.secondary}`,
      padding: "10px",
    },

    ".css-18daxcn[data-checked]": {
      backgroundColor: theme.colors.secondary,
    },

    ".css-5jdg10": {
      display: "none",
    },
  };

  return (
    <>
      <Table
        sx={{
          border: `3px solid ${theme.colors.secondary}`,
          width: "298px",
          position: "relative",
        }}
      >
        <Thead onClick={toggleDropdown}>
          <Th
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            letterSpacing="0.3px"
            color="#39808B"
            textTransform="none"
            borderBottom="3px solid #39808B"
          >
            Tutors Contacts
          </Th>
          <Box
            sx={{
              position: "absolute",
              right: "10px",
              top: "5px",
            }}
          >
            <Icon as={ChevronDownIcon} w={8} h={8} color="#39808B" />
          </Box>
        </Thead>
        {isDropdownOpen && (
          <Tbody
            sx={{
              Tr: {
                borderBottom: "2px solid #39808B",
              },
            }}
          >
            <Tr>
              <Box padding="7px 10px">
                <Checkbox marginInlineStart="none" sx={checkBoxStyle}>
                  Annukka Hupli
                </Checkbox>
              </Box>
            </Tr>
            <Tr>
              <Box padding="7px 10px">
                <Checkbox marginInlineStart="none" sx={checkBoxStyle}>
                  Filip Bovin
                </Checkbox>
              </Box>
            </Tr>
          </Tbody>
        )}
      </Table>
    </>
  );
};

export default CompanyContacts;
