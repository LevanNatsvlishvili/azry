import React from "react";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ActiveState from './Components/ActiveState';
import DeleteRow from './Components/DeleteRow';
import { searchInArray } from './Utils/Utils';

const Body = (props) => {
  const { rows, search, handleState, handleDelete } = props
  const state = {
    true: '🟢',
    false: '🔴',
  }



  if (Array.isArray(rows)) return (
    <TableBody>
      {rows
        .filter(row => searchInArray(row, search))
        .map((row, index) => (
          <TableRow key={row.id}>
            <TableCell align="left">{row.id}</TableCell>
            <TableCell align="left">{row.firstName}</TableCell>
            <TableCell align="left">{row.lastName}</TableCell>
            <TableCell align="left">{row.age}</TableCell>
            <TableCell align="left">
              <ActiveState handleState={handleState} row={row} isActive={row.activated} />
            </TableCell>
            <TableCell align="left">
              <DeleteRow handleDelete={handleDelete} index={index} />
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
  return null;
}

export default Body;