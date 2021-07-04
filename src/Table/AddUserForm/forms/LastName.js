import React from "react";
import TextField from "../../Components/TextField";

const FirstName = (props) => {

  const { handleUser, value } = props;
  return (
    <TextField
      onChange={handleUser}
      name='lastName'
      value={value}
      inputProps={{ style: { textTransform: 'capitalize' } }}
      label='Last Name' />
  )
}

export default FirstName;