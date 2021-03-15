import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';

import SubjectListMenuDrawer from './SubjectListMenuDrawer';
import { FormatListBulleted } from '@material-ui/icons';

const useStyles = makeStyles( (theme) => ( {
    root: {
        background: 'linear-gradient(90deg, rgba(7,0,150,1) 0%, rgba(209,0,212,1) 100%)',
        color: 'white',
        height: '100%',
        margin:0
    }
}));

const LibraryMenuDrawer = ({open, toggleDrawer}) => {
    const classes = useStyles();

    return(
        <Drawer anchor='left' open={open} onClose={toggleDrawer(false)} onClick={toggleDrawer(false)}>
            <Container className={classes.root} maxWidth='false'>
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12}>
                        <Link to='/subject' replace>
                            <h3 style={{color:'white'}}>
                                Matérias
                            </h3>
                        </Link>
                        <SubjectListMenuDrawer/>
                    </Grid>
                </Grid>
            </Container>
        </Drawer> 
    )
}

export default LibraryMenuDrawer;

