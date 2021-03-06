import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Distribuicoes = () => {

    return (
        <>
            <Link to='/subject/Distribuicoes/Info' replace>
                <h3>
                    Distribuições de Probabilidade
                </h3>
            </Link>
            <Divider />

            <List>
                <Link to='/subject/Distribuicoes' replace>
                    <ListItem button key={1}>
                        <ListItemText>
                            aloalo
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </>
    );
}

export default Distribuicoes;