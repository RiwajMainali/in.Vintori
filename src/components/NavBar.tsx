import React from 'react';
import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home, HelpOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = ( event: React.SyntheticEvent, newValue: any ) => {
        
        setValue(newValue);
    };

    return (
        <div className='NavBar'>
            <BottomNavigation 
                sx={{ width: '100%', position: 'fixed', bottom: 0 }}
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction
                    label="App"
                    //value="app"
                    icon={ <Home /> }
                    component={ Link } to='/'
                />
                <BottomNavigationAction
                    label="Tests"
                    //value="test"
                    icon={ <HelpOutline /> }
                    component={ Link }
                    to='/test'
                />

            </BottomNavigation>
        </div>
    );
}
