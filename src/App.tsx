import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Cellar from './pages/Cellar';

function Index() {
  return <h2>Home</h2>;
}

function Product({ match }: { match: { params: { id: string } } }) {
  return <h2>This is a page for product with ID: {match.params.id} </h2>;
}

/*function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products/1">First Product</Link>
            </li>
            <li>
              <Link to="/products/2">Second Product</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/products/:id" component={Product} />
      </div>
    </Router>
  );
}

export default AppRouter;*/


function App() {
  return (
    <div className="App">
      {/*<BrowserRouter>
        <Route path="/" element={<Root />}></Route>
        <Route path="/home" element={<Home text={"Test"} />} />
        <Route path="/about" element={<About text={"Test"} />} />
      </BrowserRouter>*/}
      <Outlet />
      <NavBar />
      
    </div>
  );
}

export default App;
