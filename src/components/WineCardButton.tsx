import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './WineCardButton.css';

export default function WineCardButton() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button
                style={{
                    minWidth: '50px',
                    maxWidth: '50px',
                    minHeight: '50px',
                    maxHeight: '50px',
                }}
                aria-describedby={id}
                variant='outlined'
                onClick={ handleClick }
            >
                {/*optional button label */}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
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
            </Popover>
        </div>
    );
}