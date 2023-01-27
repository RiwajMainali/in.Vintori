import React from 'react';
import { useState } from 'react';

interface FormProps {
    open: boolean;
    onClose: () => void;
}

const AddCellarForm: React.FC<FormProps> = ({ open, onClose }) => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');

    if (!open) {return null;}

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, height, width);
        onClose();
    }

    return (
        <div className='popup-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    name: 
                    <input
                        type='name'
                        value={name}
                        onChange={ e => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    height: 
                    <input
                        type='height'
                        value={height}
                        onChange={ e => setHeight(e.target.value) }
                        required
                    />
                </label>
                <label>
                    width:
                    <input
                        type='width'
                        value={width}
                        onChange={ e => setWidth(e.target.value) }
                        required
                    />
                </label>

                <div>
                    <button type='submit'>submit</button>
                    <button type='button' onClick={onClose}>cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddCellarForm;