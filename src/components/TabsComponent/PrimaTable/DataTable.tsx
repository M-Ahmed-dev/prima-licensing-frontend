import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Td,
  useTheme,
  Checkbox,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import React, { useMemo } from "react";

import data from "../../../components/data/db.json";

const DataTable: React.FC = () => {
  const theme = useTheme();

  const checkBoxStyle = {
    ".chakra-checkbox__control": {
      border: `3px solid ${theme.colors.secondaryLight}`,
      padding: "10px",
    },
    ".chakra-checkbox__label": {
      marginInlineStart: "2.5em",
    },
  };

  const customTable = {
    table: {
      borderCollapse: "separate",
      borderSpacing: "0 8px",
    },
    // Tr: {
    //   border: `3px solid ${theme.colors.secondaryLight}`,
    // },
    Th: {
      fontSize: "18px",
      color: theme.colors.secondary,
      fontFamily: "inherit",
      padding: "22px",
    },
  };

  const mappedData = useMemo(() => {
    return data.plugins.map((item) => (
      <Tr key={item.sr}>
        <Td>
          <Checkbox sx={checkBoxStyle} size="lg">
            {item.domainWebsite}
          </Checkbox>
        </Td>
        <Td>{item.licenseKey}</Td>
        <Td>{item.latestVersion}</Td>
        <Td>{item.domainWebsite}</Td>
        <Td>{item.domainWebsite}</Td>
        <Td>{item.domainWebsite}</Td>
        <Td>{item.licenseType}</Td>
        <Td>{item.createdAt}</Td>
        <Td>{item.expiryDate}</Td>
        <Td>{item.status}</Td>
        <Td>{item.soldFree}</Td>
      </Tr>
    ));
  }, [data.plugins]);

  return (
    <>
      <TableContainer>
        <Table
          variant="striped"
          colorScheme="red.500"
          mt="20px"
          sx={customTable}
        >
          <Thead>
            <Tr>
              <Th>
                <Checkbox sx={checkBoxStyle} size="lg">
                  Domain / Website
                  <ChevronDownIcon w={8} h={8} />
                </Checkbox>
              </Th>

              <Th>
                <Box>
                  License Key
                  <ChevronDownIcon w={8} h={8} />
                </Box>
              </Th>
              <Th>
                <Box>
                  Site Type
                  <ChevronDownIcon w={8} h={8} />
                </Box>
              </Th>
              <Th>Demo</Th>
              <Th>sell env</Th>
              <Th>premium</Th>
              <Th>license type</Th>
              <Th>created</Th>
              <Th>expired date</Th>
              <Th>status</Th>
              <Th>sold/free</Th>
            </Tr>
          </Thead>

          <Tbody>{mappedData}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
