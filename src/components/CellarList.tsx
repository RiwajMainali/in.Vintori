import React from "react";
import './CellarList.css'
import { Link } from 'react-router-dom';
import AddCellar from "./AddCellar";

function CellarList() {
    return (
        <>
            <div id='cellarList'>
                <h1>Cellar List</h1>
                <AddCellar />
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
            {/*stuff here */}
        </>
    );
}

export default CellarList;