import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const PlanejamentoExperimentos = () => {

    return (
        <>
            <Link to='/subject/PlanejamentoExperimentos/Info' replace>
                <h3>
                    Planjemento de Experimentos
                </h3>
            </Link>
            <Divider />

            <List>
                <Link to='/subject/PlanejamentoExperimentos/GuiaDeExperimentos' replace>
                    <ListItem button key={1}>
                        <ListItemText>
                            Guia de Experimentos
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to='/subject/PlanejamentoExperimentos/Definicoes' replace>
                    <ListItem button key={1}>
                        <ListItemText>
                            Definições
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </>
    );
}

export default PlanejamentoExperimentos;