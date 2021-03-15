import React, { lazy, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(
    {
        root: {
            fontSize: 13
        }
    } 
);


const Info = () => {

    const classes = useStyles();

    return (
        <Container>
            <h1>
                Links Úteis
            </h1>
        </Container>
    );
}

export default Info