import { Box } from '@chakra-ui/react';

import React from 'react';
import AddLicense from '../AddLicenseModal/AddLicense';
import SearchButtons from './SearchButtons';
import SearchInput from './SearchInput';

const SearchBar: React.FC = () => {
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
          <SearchButtons handleClick={handleClick} />
        </Box>
      )}
    </>
  );
};

export default SearchBar;
