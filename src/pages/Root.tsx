import React from "react";
import logo from '../logo.svg';
import '../App.css';
import { Router, Route, Link } from 'react-router-dom';
import Test from './Test';

function Root() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <ul>
                <li>
                    <Link to='/test'>Testing Page</Link>
                </li>
            </ul>
            </header>
            
        </div>
    );
}

export default Root;