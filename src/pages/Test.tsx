import React from 'react';
import IconButton from '../components/IconButton';
import { Add } from '@mui/icons-material';
import NavBar from '../components/NavBar';

export default function Test() {
    //to be defined...
    return (
        <div className="Test">
            <h1>testing page</h1>
            <center><IconButton icon={<Add />}/></center>
            <NavBar />
        </div>
    );   
}