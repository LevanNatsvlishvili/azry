import React from "react";
import TextField from "../../Components/TextField";

const FirstName = (props) => {

  const { handleUser, value } = props;
  return (
    <TextField
      select
      onChange={handleUser}
      options={options}
      value={value}
      name='activated'
      label='Activated' />
  )
}

const options = [
  { value: 'true', label: 'Active' },
  { value: 'false', label: 'Inactive' },
]

export default FirstName;