import React, { useState } from "react";
//import { createStyles } from '@mui/material/styles';
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { Link } from 'react-router-dom';

import NavBar from "../components/NavBar";
import IconButton from "../components/IconButton";
import AddCellar from "../components/AddCellar";

function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;

    return (
        <ListItem
            style={style}
            key={index}
            component='div'
            disablePadding
        >
            <ListItemButton>
                <ListItemText primary={`Cellar ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}

export default function CellarSelector() {
    //to be defined...
    const [data, setData] = useState('')

    return (
        <div>
            <header>
                <div id="page-title">
                    Cellar Selector Page
                </div>
                
            </header>
            <IconButton
                //onClick={<AddCellarForm />}
                icon={<Add />}
            />
            <NavBar />

            <Box
                sx={{
                    width: '75%',
                    height: 400,
                    maxWidth: 360,
                    bgcolor: 'background.paper'
                }}
            >
                <FixedSizeList
                    height={400}
                    width={360}
                    itemSize={45}
                    itemCount={5}
                    overscanCount={1}
                >
                    { renderRow }
                </FixedSizeList>
            </Box>
            <nav>
                    <ul>
                        <li>
                            <Link to={'/cellars/0'}>
                                cellar 0
                            </Link>
                        </li>
                        <li>
                            <Link to={'/cellars/1'}>
                                cellar 1
                            </Link>
                        </li>
                    </ul>
            </nav>
        </div>
    );
}