import React, { useState } from "react";
//import { createStyles } from '@mui/material/styles';
import Add from '@mui/icons-material/Add';

import NavBar from "../components/NavBar";
import IconButton from "../components/IconButton";
import AddCellar from "../components/AddCellar";

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