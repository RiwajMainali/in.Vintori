import React from "react";
import { Form } from 'react-router-dom';

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

            <div>
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
        </div>
    );
}

export default Cellar;