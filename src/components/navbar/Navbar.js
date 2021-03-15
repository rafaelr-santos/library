import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LibraryMenuDrawer from '../menu/LibraryMenuDrawer';

const useStyles = makeStyles( (theme) => ( {
    navbar: {
        background: 'linear-gradient(90deg, rgba(7,0,150,1) 0%, rgba(209,0,212,1) 100%)',
        color:'white'
    }
}));


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
  
const Navbar = ({props}) => {

    const classes = useStyles();

    const [drawerState, setDrawerState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawerState(open);
    };

    
    return(
        <>
            <LibraryMenuDrawer open={drawerState} toggleDrawer = {toggleDrawer} />
            <ElevationScroll {...props}>
                <AppBar className={classes.navbar}>
                    <Toolbar>
                        
                        <IconButton edge="start" className="" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>

                        <Box display="flex" justifyContent="flex-end" style={{ width: '100%' }}>
                            <Link to='/home' replace>
                                <h3 style={{color:'white'}}>
                                    Biblioteca Home
                                </h3>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            
        </>
    )
}

export default Navbar;

