import React from "react";
import IconButton from '@material-ui/core/IconButton';

const ActiveState = (props) => {
  const { isActive, handleState, row } = props
  const state = {
    true: '🟢',
    false: '🔴',
  }

  return (
    <IconButton
      onClick={() => handleState(isActive, row)}
      size='small'
    >
      {state[isActive || false]}
    </IconButton>
  );
}

export default ActiveState;