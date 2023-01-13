import React from 'react';
import IconButton from '../components/IconButton';
import { Add } from '@mui/icons-material';


export default function Test() {
    //to be defined...
    return (
        <div className="Test">
            <h1>testing page</h1>
            <center><IconButton icon={<Add />}/></center>
        </div>
    );   
}