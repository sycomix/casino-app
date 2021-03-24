import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import Machine from './Machine';


const Popup = (props) => {

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title" style={{fontSize: "34px"}}>{props.winner ? "Winner" : "Loser"}</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <Machine 
            s1={props.s1}
            s2={props.s2}
            s3={props.s3} 
            handleClose={props.handleClose}
            updateNumber={props.updateNumber}
            /> 
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Popup;