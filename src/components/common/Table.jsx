import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ columns, sortColumn, handleSort, data }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
