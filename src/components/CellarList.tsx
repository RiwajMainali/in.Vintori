import React from "react";
import './CellarList.css'

function CellarList() {
    return (
        <>
            <div id='cellarList'>
                <h1>Cellar List</h1>

                <nav>
                    <ul>
                        <li>
                            <a href={'/cellars/0'}>
                                cellar 0
                            </a>
                        </li>
                        <li>
                            <a href={'/cellars/1'}>
                                cellar 1
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/*stuff here */}
        </>
    );
}

export default CellarList;