import React from "react";
//import { createStyles } from '@mui/material/styles';
import Add from '@mui/icons-material/Add';

import NavBar from "../components/NavBar";
import IconButton from "../components/IconButton";


export default function InventorySelection() {
    //to be defined...
    return (
        <div>
            <header>
                <div id="page-title">
                    Inventory Selection Page
                </div>
                
            </header>
            <IconButton icon={<Add />} />
            <NavBar />
        </div>
    );
}