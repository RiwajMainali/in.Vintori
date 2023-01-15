import React, { useState } from "react";
//import { createStyles } from '@mui/material/styles';
import Add from '@mui/icons-material/Add';

import NavBar from "../components/NavBar";
import IconButton from "../components/IconButton";

const AddCellarForm = (cellarName: string, cellarWidth: number, cellarHeight: number ) => {
    return (
        <form>
            <label>
                new cellar name:
                <input type="text" />
            </label>
        </form>
    );
}

export default function InventorySelection() {
    //to be defined...
    const [data, setData] = useState('')

    return (
        <div>
            <header>
                <div id="page-title">
                    Inventory Selection Page
                </div>
                
            </header>
            <IconButton
                //onClick={<AddCellarForm />}
                icon={<Add />}
            />
            <NavBar />
        </div>
    );
}