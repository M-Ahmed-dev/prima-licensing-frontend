import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import DataTable from "./DataTable";

const PrimaTable: React.FC = () => {
  return (
    <>
      <SearchBar />
      <DataTable />
    </>
  );
};

export default PrimaTable;
