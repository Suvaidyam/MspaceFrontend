import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import icon from '../../Assets/create_room.svg'
import CreateSpace from '../CreateSpace/CreateSpace'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <div className='bottom-16 right-12 fixed'>
        <Button onClick={handleOpen}><img className='bg-blue-700 w-16 rounded-full' src={icon} alt="" /></Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=
          'justify-center'>
          <Typography>
            <CreateSpace handleClose={handleClose} className="justify-center" />
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}
