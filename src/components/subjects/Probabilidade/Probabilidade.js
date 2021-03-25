import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Probabilidade = () => {

    return (
        <>
            <Link to='/subject/Probabilidade/Info' replace>
                <h3>
                    Resultados de Probabilidade
                </h3>
            </Link>
            <Divider />

            <List>
                <Link to='/subject/Probabilidade/TeoremaDeBayes' replace>
                    <ListItem button key={1}>
                        <ListItemText>
                            Teorema de Bayes
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </>
    );
}

export default Probabilidade;