import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Space from '../CreateSpace/CreateSpace'



export default function Popup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className='fixed w-full bottom-0  ml-[930px] mb-8'>
        <Button className=' ' onClick={handleOpen}>click</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box

          className='absolute  bg-white my-4  left-96 '>
          <Typography>
            <Space />
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}