import React from "react";
import TextField from "../../Components/TextField";

const FirstName = (props) => {

  const { handleUser, value } = props;
  return (
    <TextField
      type='number'
      onChange={handleUser}
      name='age'
      inputProps={{ min: 0 }}
      value={value}
      label='Age' />
  )
}

export default FirstName;