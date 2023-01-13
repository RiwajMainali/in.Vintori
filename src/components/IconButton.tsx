import React from 'react';
import { Box, Button } from '@mui/material';

import './IconButton.css';

interface iconImg {
    onClick?: () => void;
    //size?: number;
    icon: JSX.Element;
    color?: string;
    disabled?: boolean;
}

const IconButton: React.FC<iconImg> = ({ onClick, /*size = 40,*/ icon, color = 'black', disabled = false }) => {
    /*const buttonStyle = {
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        color,
    };*/

    return (
        <Box>
            {/*<div className="iconImg">*/}
                <Button 
                    style={{ maxWidth: "36px", minWidth: "36px" }}
                    variant="outlined">
                        {icon}
                </Button>
            {/*{</div>*/}
        </Box>
    );
}

export default IconButton;