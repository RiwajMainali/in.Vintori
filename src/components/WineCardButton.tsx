import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './WineCardButton.css';

import * as Dialog from '@radix-ui/react-dialog';
import Close from '@mui/icons-material/Close';

export default function WineCardButton() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button
                    style={{
                        minWidth: '50px',
                        maxWidth: '50px',
                        minHeight: '50px',
                        maxHeight: '50px',
                    }}
                    variant='outlined'
                />
            </Dialog.Trigger>
            
            <Dialog.Portal>
                <Dialog.Overlay className='DialogOverlay' />
                <Dialog.Content className='DialogContent'>
                    <Dialog.Title className='DialogTitle'>
                        [location] name of wine
                    </Dialog.Title>

                    <Typography sx={{ p: 2 }}>
                        <div id='top'>
                            <div id='location'>
                                Located at: ?
                            </div>
                        
                            <div id='qty'>
                                Qty: ?
                            </div>
                        </div>

                        < br />< br /> <br />
                        
                        <div id='middle'>
                            <div id='name'>
                                Name: ?
                            </div>
                        </div>
                        
                        < br />< br /> <br />

                        <div id='bottom'>
                            <div id='notes'>
                                Notes
                            </div>
                        </div>
                    
                    </Typography>

                <Dialog.Close asChild>
                    <Close />
                </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}