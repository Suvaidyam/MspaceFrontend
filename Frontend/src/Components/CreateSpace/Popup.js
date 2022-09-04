import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Space from '../CreateSpace/CreateSpace'
import icon from '../../Assets/add-circle.svg'



export default function Popup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <div className='bottom-16 right-12 fixed'>
        <Button className=' bg-green-500' onClick={handleOpen}><img className='bg-blue-700 w-16 rounded-full' src={icon} alt="" /></Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box

          className='absolute  bg-white my-8  lg:left-[28%] md:left-[22%] sm:left-[16%] xs:left-[10%] xl:left-[32%] '>
          <Typography>
            <Space />
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}