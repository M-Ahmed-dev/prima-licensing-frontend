import { Box, Button, useTheme } from "@chakra-ui/react";

import React from "react";
import AddLicense from "./AddLicense";
import SearchInput from "./SearchInput";

const TableSearchHeader: React.FC = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState<boolean>(false);

  const handleClick = () => setValue(!value);

  return (
    <>
      {value ? (
        <AddLicense handleClick={handleClick} />
      ) : (
        <Box
          display="flex"
          alignItems="center"
          border="3px solid #39808B"
          padding="13px 26px"
        >
          <SearchInput />

          {/*  */}
          <Box marginLeft="auto" display="flex" alignItems="center" gap="11px">
            <Button
              maxWidth="200px"
              sx={theme.buttons.secondarySmall}
              border={`3px solid ${theme.colors.secondary}`}
              textTransform="uppercase"
              height="41px"
              fontSize="18px"
              padding="20px"
            >
              Show Demos
            </Button>
            <Button
              maxWidth="200px"
              fontSize="18px"
              textTransform="uppercase"
              sx={theme.buttons.secondarySmall}
              border={`3px solid ${theme.colors.secondary}`}
              height="41px"
              padding="20px"
            >
              Export CSV
            </Button>
            <Button
              maxWidth="200px"
              fontSize="18px"
              sx={theme.buttons.primarySmall}
              height="43px"
              padding="21px"
              onClick={handleClick}
            >
              Add License
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default TableSearchHeader;
