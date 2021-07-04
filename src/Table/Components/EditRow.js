import React from "react";
import IconButton from '@material-ui/core/IconButton';

const DeleteRow = (props) => {
  const { row, handleEdit } = props

  return (
    <IconButton
      onClick={() => handleEdit(row)}
      size='small'
    >
      ✏️
    </IconButton>
  );
}

export default DeleteRow;