import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Form } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

import IconButton from './IconButton';
import AddCellarForm from './AddCellarForm';
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

    const handleClick = () => {
        console.log('button clicked!');
        <AddCellarForm open={false} onClose={handleClose} />
    };

    return (
    <div>
        {/*<IconButton
            onClick={handleOpen}
            icon={<Add />}
        >*/}
            
            

            {/*<Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                
                
                
                <Form method="post" action="/add">
                    <IconButton 
                        onClick={ handleClose }
                        icon={<Close />}
                        children={null} 
                    />
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
            </Modal>*/}
            
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button
                        className='addCellarButton'
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none'
                        }}
                    >
                        <Add />
                    </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className='DialogOverlay'/>
                    <Dialog.Content className='DialogContent'>
                        <Dialog.Title className='DialogTitle'>
                            Add a Cellar
                        </Dialog.Title>

                        <Dialog.Description>
                            Adds a new cellar to your collection
                        </Dialog.Description>

                        <fieldset className='Fieldset'>
                            <label className='label' htmlFor='name'>
                                New Cellar Name*
                            </label>
                            <input className='input' id='name' />
                        </fieldset>

                        <Dialog.Close asChild>
                            <IconButton icon={<Close />} />
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        
        {/*</IconButton>*/}
        break
        {/*<AddCellarForm open={false} onClose={handleClose} />*/}
    </div>
    );
}

export default AddCellar;