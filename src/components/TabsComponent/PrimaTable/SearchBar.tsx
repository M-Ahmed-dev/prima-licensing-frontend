import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useTheme,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import React from "react";
import AddLicense from "./AddLicense";

const Searchbar: React.FC = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState<boolean>(false);

  const handleClick = () => setValue(!value);

  return (
    <>
      {value ? (
        <AddLicense handleClick={handleClick} />
      ) : (
        <Box
          display='flex'
          alignItems='center'
          border='3px solid #39808B'
          padding='13px 26px'
        >
          <Box>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <SearchIcon
                  sx={{
                    color: theme.colors.secondaryLight,
                  }}
                />
              </InputLeftElement>
              <Input
                sx={{
                  background: theme.colors.secondaryLight,
                  borderRadius: "10px",
                  color: theme.colors.secondary,
                  lineHeight: "normal",
                  opacity: "0.15000000596046448",

                  "&::placeholder": {
                    opacity: 1,
                    color: theme.colors.secondary,
                  },
                }}
                width='403px'
                type='search'
                placeholder='Search from 78 Licenses'
              />
            </InputGroup>
          </Box>
          {/*  */}
          <Box marginLeft='auto' display='flex' alignItems='center' gap='11px'>
            <Button
              maxWidth='200px'
              sx={theme.buttons.secondarySmall}
              height='41px'
              fontSize='18px'
              padding='20px'
            >
              Show Demos
            </Button>
            <Button
              maxWidth='200px'
              fontSize='18px'
              sx={theme.buttons.secondarySmall}
              height='41px'
              padding='20px'
            >
              Export CSV
            </Button>
            <Button
              maxWidth='200px'
              fontSize='18px'
              sx={theme.buttons.primarySmall}
              height='43px'
              padding='21px'
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

export default Searchbar;
