import React from "react";
import DataTable from "./DataTable";
import SearchBar from "../SearchBar/SearchBar";

const PrimaTable: React.FC = () => {
  return (
    <>
      <SearchBar />
      <DataTable />
    </>
  );
};

export default PrimaTable;
