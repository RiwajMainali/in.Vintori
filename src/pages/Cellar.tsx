import React from "react";
import { Form } from 'react-router-dom';
import { Grid } from '@mui/material'
import NavBar from "../components/NavBar";
import WineCardButton from "../components/WineCardButton";

function Cellar() {
    const cellar = {
        name: 'cellar name',
        location: 'location',
        capacity: '5'
    }

    return (
        <div id='cellar'>
            Current Cellar

            <div>
                <h1>
                    {cellar.name}
                </h1>
            </div>

            <div id='option-buttons'>
                <Form action="edit">
                    <button type="submit">Edit</button>
                </Form>
                <Form
                    method="post"
                    action="destroy"
                    onSubmit={(event: React.SyntheticEvent) => {
                        if (!window.confirm(
                            'are you sure you want to delete this cellar?'
                        )) { event.preventDefault(); }
                    }}
                >
                    <button type="submit">delete</button>
                </Form>
            </div>
            <div id="button-table">
                <Grid container
                    marginLeft={'50px'}
                    spacing='20px'
                    //rowSpacing='20px'
                    columnSpacing='50px'
                >
                    <Grid item
                        xs={1}
                        md={1}
                    >
                        <WineCardButton />
                    </Grid>
                    <Grid item
                        xs={1}
                        md={1}
                    >
                        <WineCardButton />

                    </Grid>
                    <Grid item
                        xs={1}
                        md={1}
                    >
                        <WineCardButton />
                    </Grid>
                    <Grid item
                        xs={1}
                        md={1}
                    >
                        <WineCardButton />
                    </Grid>
                    <Grid item
                        xs={1}
                        md={1}
                    >
                        <WineCardButton />
                    </Grid>
                </Grid>
            </div>
            <NavBar />
        </div>
    );
}

export default Cellar;