import React from "react";
// import ElevenColumnTableWithRows from "./TableData/DemoTable";
import DataTable from "./TableData/DataTable";
import TableSearchHeader from "./TableSearchHeader";

const PrimaTable: React.FC = () => {
  return (
    <>
      <TableSearchHeader />
      <DataTable />
      {/* <ElevenColumnTableWithRows /> */}
    </>
  );
};

export default PrimaTable;
