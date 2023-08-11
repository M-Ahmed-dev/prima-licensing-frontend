import { Table, TableContainer } from "@chakra-ui/react";
import React from "react";
import DataTableBody from "./DataTableBody";

import DataTableHeading from "./DataTableHeading";

const DataTable: React.FC = () => {
  return (
    <>
      <TableContainer>
        <Table
          variant="unstyled"
          mt="20px"
          fontFamily="Inter"
          fontStyle="normal"
        >
          <DataTableHeading />
          <DataTableBody />
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
