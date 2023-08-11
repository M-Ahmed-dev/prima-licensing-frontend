import React from "react";
import DataTable from "./DataTable";
import Searchbar from "./SearchBar";

const PrimaTable: React.FC = () => {
  return (
    <>
      <Searchbar />
      <DataTable />
    </>
  );
};

export default PrimaTable;
