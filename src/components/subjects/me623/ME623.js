import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ME613 = () => {

    return (
        <>
            <Link to='/subject/ME623/Info' replace>
                <h3>
                    ME623 - Planejamento e Pesquisa
                </h3>
            </Link>
            <Divider />

            <List>
                <Link to='/subject/ME623/GuiaDeExperimentos' replace>
                    <ListItem button key={1}>
                        <ListItemText>
                            Guia de Experimentos
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to='/subject/ME623/Definicoes' replace>
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

export default ME613;