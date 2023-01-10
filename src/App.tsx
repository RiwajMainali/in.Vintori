import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
      </header>
    </div>
  );
}

export default App;
