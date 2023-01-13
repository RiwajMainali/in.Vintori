import React from 'react';
import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import './IconButton.css';

export default function IconButton() {
    return (
        <Box>
            <div className='iconImg'>
                <Button 
                    style={{ maxWidth: "36px", minWidth: "36px"}}
                    variant="outlined"
                    startIcon={<Add />}>
                </Button>
            </div>
        </Box>
    );
}