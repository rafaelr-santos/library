import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ME613 = () => {

    return (
        <>
            <Link to='/subject/MS512/Info' replace>
                <h3>
                    MS512 - Análise I
                </h3>
            </Link>
            <Divider />

            <List>
                <Link to='/subject/MS512/NormasVetores' replace>
                    <ListItem button key={1}>
                        <ListItemText>
                            Normas de Vetores
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to='/subject/MS512/NormasMatrizes' replace>
                    <ListItem button key={1}>
                        <ListItemText>
                            Normas de Matrizes
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </>
    );
}

export default ME613;