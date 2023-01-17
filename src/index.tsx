import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

//pages
import Root from './pages/Root';
import Test from './pages/Test';
import ErrorPage from './pages/error-page';
import CellarSelector from './pages/CellarSelector';
import Cellar from './pages/Cellar';
import CellarList from './components/CellarList';

import NavBar from './components/NavBar';

//root should probs include navbar
/*const Root = () => /*<div>Root heading</div>;
const Dashboard = () => <div>Dashboard</div>*/

const router = createBrowserRouter([
        /*<Route path="/" element={<Root />}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>*/
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/cellars/:cellarId',
                element: <Cellar />,
            },
        ],
    },
    {
        path: '/root',
        element: <Root />,
    },
    {
        path: '/test',
        element: <Test />,
    },
    {
        path: '/cellars',
        element: <CellarSelector />,
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*<App />*/}
    
  </React.StrictMode>
);

