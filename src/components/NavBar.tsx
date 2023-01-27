import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home, HelpOutline, Park } from '@mui/icons-material';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import Cellar from '../pages/Cellar';

 function NavBar() {
    const path = useLocation();

    //route buttons
    return (
        <div className='NavBar'>
            <BottomNavigation 
                sx={{ width: '100%', position: 'fixed', bottom: 0 }}
                value={path.pathname}
            >
                {   /*individual routes*/   }
                <BottomNavigationAction
                    label="root"
                    value='/root'
                    icon={ <Park /> }
                    component={ NavLink } to='/root'
                />
                <BottomNavigationAction
                    label="App"
                    value='/'
                    icon={ <Home /> }
                    component={ NavLink } to='/'
                    children={ <Cellar /> }
                />
                <BottomNavigationAction
                    label="Tests"
                    value="/test"
                    icon={ <HelpOutline /> }
                    component={ Link } to='/test'
                />
                <BottomNavigationAction
                    label="Cellars"
                    value="/cellars"
                    icon={ <HelpOutline /> }
                    component={ NavLink } to='/cellars'
                />
            </BottomNavigation>
        </div>
    );
}

export default NavBar;