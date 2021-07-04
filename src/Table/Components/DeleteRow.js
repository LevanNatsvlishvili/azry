import React from "react";
import IconButton from '@material-ui/core/IconButton';

const DeleteRow = (props) => {
  const { index, handleDelete } = props
  const deleteIcon = '❌';

  return (
    <IconButton
      onClick={() => handleDelete(index)}
      size='small'
    >
      {deleteIcon}
    </IconButton>
  );
}

export default DeleteRow;