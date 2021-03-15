import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(
    {
        noArticle:{
            fontSize : 20
        }
    } 
);

const Subject = () => {
    const classes = useStyles();

    return (
        <Container classes={{ root : classes.noArticle }} >
            <h1>Nenhum item selecionado :( </h1>
        </Container>
    );
}

export default Subject