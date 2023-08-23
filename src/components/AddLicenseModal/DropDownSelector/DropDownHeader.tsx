import React from "react";
import { Th, Box, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface TableHeaderProps {
  selectName: string;
  toggleDropdown: () => void;
}

const DropdownHeader: React.FC<TableHeaderProps> = ({
  selectName,
  toggleDropdown,
}) => {
  return (
    <Box
      onClick={toggleDropdown}
      sx={{
        position: "relative",
      }}
    >
      <Th
        fontFamily='Inter'
        fontSize='16px'
        fontWeight='500'
        letterSpacing='0.3px'
        color='#39808B'
        textTransform='none'
        borderBottom='none'
      >
        {selectName}
      </Th>
      <Box
        sx={{
          position: "absolute",
          right: "10px",
          top: "5px",
        }}
      >
        <Icon as={ChevronDownIcon} color='#39808B' w={8} h={8} />
      </Box>
    </Box>
  );
};

export default DropdownHeader;
