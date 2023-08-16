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
  RadioGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CompanyContacts: React.FC = () => {
  const theme = useTheme();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(" ");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
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

  const checkboxData = ["Pekka Kussi", "Antero Heino", "Matti Meikäläinen"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
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
            Company Contacts
          </Th>
          <Box
            sx={{
              position: "absolute",
              right: "10px",
              top: "5px",
            }}
          >
            <Icon as={ChevronDownIcon} color="#39808B" w={8} h={8} />
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
            {/* <Tr>
              <Box padding="7px 10px">
                <Checkbox
                  onChange={handleChange}
                  marginInlineStart="none"
                  sx={checkBoxStyle}
                  value={"Pekka Kussi"}
                >
                  Pekka Kussi
                </Checkbox>
              </Box>
            </Tr>
            <Tr>
              <Box padding="7px 10px">
                <Checkbox marginInlineStart="none" sx={checkBoxStyle}>
                  Antero Heino
                </Checkbox>
              </Box>
            </Tr> */}
            {checkboxData.map((name, index) => (
              <Tr key={index}>
                <RadioGroup padding="7px 10px">
                  <Checkbox
                    onChange={handleChange}
                    marginInlineStart="none"
                    sx={checkBoxStyle}
                    value={name}
                  >
                    {name}
                  </Checkbox>
                </RadioGroup>
              </Tr>
            ))}
          </Tbody>
        )}
      </Table>

      <Box>
        {selectedValue && (
          <Box marginTop="10px" padding="7px 10px">
            {selectedValue}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CompanyContacts;
