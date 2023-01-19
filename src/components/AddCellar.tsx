import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Form } from 'react-router-dom';

import IconButton from './IconButton';
import Close from '@mui/icons-material/Close';
import Add from '@mui/icons-material/Add';

interface FormData {
    cellarName?: (value: string) => void,
    cellarWidth?: (value: number) => void,
    cellarHeight?: (value: number) => void,
}

const AddCellar: React.FC<FormData> = ({ cellarName, cellarWidth, cellarHeight}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    return (
    <div>
        <IconButton
            onClick={handleOpen}
            icon={ <Add /> }
        />
        <Box>
            <IconButton 
                onClick={ handleClose }
                icon={<Close />} 
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                
            
                <Form method="post" action="/add">
                    <label>
                        new cellar name:
                        
                    </label>
                    <input type="text" name='name' />
                    <TextField
                        id='outlined-basic'
                        label='new cellar name*'
                        variant='outlined'
                        //onSubmit={ cellarName }
                    />
                    <button type="submit">Add Cellar</button>
                    modal
                </Form>
            </Modal>
            
        </Box>
    </div>
    );
}

export default AddCellar;