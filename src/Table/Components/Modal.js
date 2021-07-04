import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';

const CustomizedModal = (props) => {
  const classes = useStyles();

  const { open, handleModal } = props


  return (
    <div >
      <Button
        onClick={handleModal}
        startIcon={<AddIcon />}
        color='secondary'
        variant='contained'
      >
        Add New User
      </Button>
      <Modal
        open={open}
        onClose={handleModal}
      >
        <div className={classes.modalBox}>
          {props.children}
        </div>
      </Modal>
    </div>
  );
}


export default CustomizedModal;

const useStyles = makeStyles((theme) => ({
  modalBox: {
    height: '400px',
    width: '500px',
    background: '#fff',
    top: '50%',
    left: '50%',
    transform: 'translate(55%,40%)',
    padding: theme.spacing(2)
  },
}));