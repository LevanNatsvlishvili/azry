import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import TableToolbar from "./TableToolbar";

const query = `
  {
    users
  }
`


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const TableComponent = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([])
  const [search, setSearch] = useState('')

  const fetchData = async () => {
    const result = await axios.get('http://localhost:5000/users', { query });
    const resultData = result.data;
    console.log(resultData);
    setRows([...resultData]);
  }

  useEffect(() => {
    fetchData();

    // setRows([...rows])
  }, [])

  const handleState = (e, row) => {
    row.activated = !row.activated;
    setRows([...rows]);
  }

  const handleDelete = (index) => {
    rows.splice(index, 1);
    setRows([...rows]);
  }

  const handleSearch = (e, newVal) => {
    setSearch(e.target.value);
  }

  const insertRow = (row) => {
    setRows([...rows, row]);
  }
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <TableToolbar insertRow={insertRow} rows={rows} value={search} handleSearch={handleSearch} />
      <Table className={classes.table} aria-label="simple table">
        <TableHeading />
        <TableBody
          handleDelete={handleDelete}
          handleState={handleState}
          search={search}
          rows={rows} />
      </Table>
    </TableContainer>
  );
}

export default TableComponent;