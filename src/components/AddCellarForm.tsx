import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

interface FormProps {
    open?: boolean;
    onClose?: () => void;
}

const AddCellarForm: React.FC<FormProps> = ({ open }) => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');

    //if (!open) {return null;}

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, height, width);
        //onClose();
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="New Cellar Name"
                type='name'
                value={name}
                onChange={ e => setName(e.target.value)}
                variant='standard'
                required
            />
            <br/>
            <TextField
                label="Height"
                helperText='# of slots in a column'
                type='height'
                value={height}
                onChange={ e => setHeight(e.target.value) }
                variant='standard'
                required
            />
            <br/>
            <TextField
                label="Width"
                helperText='# of slots in a row'
                type='width'
                value={width}
                onChange={ e => setWidth(e.target.value) }
                variant='standard'
                required
            />
            <button type='submit'>
                save
            </button>
        </form>
    );
}

export default AddCellarForm;