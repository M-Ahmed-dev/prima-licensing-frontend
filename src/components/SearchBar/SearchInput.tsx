import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

const SearchInput: React.FC = () => {
  const theme = useTheme();

  return (
    <>
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
              background: "#E6F0F2",
              borderRadius: "10px",
              color: theme.colors.secondary,
              lineHeight: "normal",
              border: "none",

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
    </>
  );
};

export default SearchInput;
