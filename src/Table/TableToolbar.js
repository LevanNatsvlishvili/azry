import React from "react";
import Box from '@material-ui/core/Box';
import InputBase from "@material-ui/core/InputBase";
import Modal from "./Components/Modal";
import AddUserForm from "./AddUserForm";

const TableToolbar = (props) => {
  const { open, handleModal } = props

  const { handleSearch, value, insertRow, edit, handleEditRow } = props;
  return (
    <Box
      boxSizing='border-box'
      display='flex'
      alignItems='center'
      paddingX='20px'
      minHeight='56px'
      width='100%'
      borderBottom='1px solid rgba(224, 224, 224, 1)'>

      <Modal open={open} handleModal={handleModal}>
        <AddUserForm
          handleEditRow={handleEditRow}
          insertRow={insertRow}
          edit={edit}
          open={open}
        />
      </Modal>

      <Box ml='auto' border='1px solid' borderRadius='6px' padding='4px'>
        <InputBase
          placeholder='Search'
          onChange={handleSearch}
          value={value}
        />
      </Box>
    </Box>
  );
}

export default TableToolbar;