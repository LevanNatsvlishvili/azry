import React from "react";
import TextField from "../../Components/TextField";

const FirstName = (props) => {

  const { handleUser, value } = props;
  return (
    <TextField
      onChange={handleUser}
      name='firstName'
      value={value}
      inputProps={{ style: { textTransform: 'capitalize' } }}
      label='First Name' />
  )
}

export default FirstName;