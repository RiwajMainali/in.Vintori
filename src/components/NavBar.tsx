import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home, HelpOutline, Park } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

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
                    component={ Link } to='/root'
                />
                <BottomNavigationAction
                    label="App"
                    value='/'
                    icon={ <Home /> }
                    component={ Link } to='/'
                />
                <BottomNavigationAction
                    label="Tests"
                    value="/test"
                    icon={ <HelpOutline /> }
                    component={ Link } to='/test'
                />
                <BottomNavigationAction
                    label="Dashboard"
                    value="/dashboard"
                    icon={ <HelpOutline /> }
                    component={ Link } to='/dashboard'
                />
            </BottomNavigation>
        </div>

    );
}

export default NavBar;