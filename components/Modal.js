import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Detail from '../pages/Products/[id]'
import getStaticProps from '../pages/Products/[id]'

export default function KeepMountedModal({coffee, name, price}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '82%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        bgcolor: 'gray',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
     <button className="btn-add-cart" onClick={handleOpen}>ADD TO CART
    </button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            ALL YOUR STUFF
            <hr/>
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          {name}
           {price}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}