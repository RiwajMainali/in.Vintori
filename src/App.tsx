import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" element={<Home text={"Test"} />} />
        <Route path="/about" element={<About text={"Test"} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
