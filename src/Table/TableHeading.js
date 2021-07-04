import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

const TableHeading = (props) => {

  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">Id</TableCell>
        <TableCell align="left">First Name</TableCell>
        <TableCell align="left">Last Name</TableCell>
        <TableCell align="left">Age</TableCell>
        <TableCell align="left">Activated</TableCell>
        <TableCell align="left"></TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeading;