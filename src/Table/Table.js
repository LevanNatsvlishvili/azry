import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
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
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState({})

  const fetchData = async () => {
    const result = await axios.get('http://localhost:5000/users', { query });
    const resultData = result.data;
    setRows([...resultData]);
  }

  useEffect(() => {
    fetchData();

    if (open === false) {
      setEdit({});
    }
  }, [])


  const handleEditRow = (newObj) => {
    rows[rows.indexOf(edit)] = newObj
    setRows([...rows]);
  }

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

  const handleModal = () => {
    setOpen(!open);

    if (open) {
      setEdit({});
    }
  }

  const handleEdit = (obj) => {
    setOpen(!open);
    setEdit(obj);
  }

  return (
    <TableContainer component={Paper}>
      <TableToolbar
        handleEditRow={handleEditRow}
        handleModal={handleModal}
        insertRow={insertRow}
        edit={edit}
        open={open}
        rows={rows}
        value={search}
        handleSearch={handleSearch} />
      <Table className={classes.table} aria-label="simple table">
        <TableHeading />
        <TableBody
          handleDelete={handleDelete}
          handleState={handleState}
          handleEdit={handleEdit}
          search={search}
          rows={rows} />
      </Table>
    </TableContainer>
  );
}

export default TableComponent;