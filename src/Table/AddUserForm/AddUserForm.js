import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import FirstName from "./forms/FirstName";
import LastName from "./forms/LastName";
import Age from "./forms/Age";
import Activated from "./forms/Activated";
import { divideId } from "../Utils/Utils";

const TableToolbar = (props) => {
  const { insertRow, edit, handleEditRow } = props;
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    activated: 'false',
    id: '0',
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    if (Object.keys(edit).length > 0) {
      handleEditRow(user);
      return;
    }
    insertRow(user);
  }

  useEffect(() => {
    if (Object.keys(edit).length > 0) setUser(edit)

    if (Object.keys(edit).length === 0) setUser({ ...user, id: divideId() })
  }, [edit], [user])

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <FirstName value={user.firstName} handleUser={handleUser} />
      </Grid>
      <Grid item xs={6}>
        <LastName value={user.lastName} handleUser={handleUser} />
      </Grid>
      <Grid item xs={6}>
        <Age value={user.age} handleUser={handleUser} />
      </Grid>
      <Grid item xs={6}>
        <Activated value={user.activated} handleUser={handleUser} />
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={handleSubmit}
          style={{ width: '100%', height: '50px' }}
          color='primary'
          letiant='contained'>
          Submit
        </Button>
      </Grid>

    </Grid>
  );
}

export default TableToolbar;