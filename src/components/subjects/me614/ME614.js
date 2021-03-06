import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ME614 = () => {

    return (
        <>
            <h2>
                ME614 Analise de Regressao
            </h2>

            <Divider />

            <List>
                <Link to='ME613/Regressao' replace>
                    <ListItem button key={1}>
                        <ListItemText>
                            Resumo Regressão
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to='ME613/Regressao' replace>
                    <ListItem button key={2}>
                        <ListItemText>
                            Resumo Regressão
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </>
    );
}

export default ME614;