import { Box, Table, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import DropdownBody from "./DropDownBody";
import DropdownHeader from "./DropDownHeader";

interface DropDownSelectorProps {
  data: string[];
  onSelect: (selected: string) => void;
  selectedValue: string;
  selectName: string;
}

const DropDownSelector: React.FC<DropDownSelectorProps> = ({
  data,
  onSelect,
  selectedValue,
  selectName,
}) => {
  const theme = useTheme();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        <DropdownHeader
          selectName={selectName}
          toggleDropdown={toggleDropdown}
        />

        {isDropdownOpen && <DropdownBody data={data} onSelect={onSelect} />}
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

export default DropDownSelector;
