import React, {useState} from "react";
import Box from "@mui/material/Box";
import {Button, Modal} from "@mui/material";

const InitialPopup = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="initial-popup">
        <Button className="close-btn" onClick={handleClose}>&#x2715;</Button>
        <div>
          <p>
            Jump into SPIN&WIN mini-app now and Spin the Wheel at least once to get 10 tickets and 100 seconds right
            away!
          </p>
          <p>The promo is valid for 1 hour</p>
          <a href="https://t.me/TimeLotteryBot" className="black-btn">
            SPIN&WIN mini-app
          </a>
        </div>
      </Box>
    </Modal>
  )
}

export default InitialPopup;