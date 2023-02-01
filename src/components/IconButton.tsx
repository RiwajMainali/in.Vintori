import React from 'react';
import { Box, Button } from '@mui/material';

import './IconButton.css';

interface iconImg {
    children?: React.ReactNode;
    onClick?: () => void;
    //size?: number;
    icon: JSX.Element;
    color?: string;
    disabled?: boolean;
}

const handleClick = () => {
    console.log('button clicked!');
};

const IconButton: React.FC<iconImg> = ({children, onClick, /*size = 40,*/ icon, color = 'black', disabled = false }) => {
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
                    className='iconImg'
                    style={{ /*maxWidth: "36px", minWidth: "36px",*/ backgroundColor: 'transparent', border: 'none' }}
                    variant="outlined"
                    onClick={ onClick ? onClick : handleClick }
                    >
                        {children}
                        {icon}
                </Button>
            {/*</div>*/}
        </Box>
    );
}

export default IconButton;