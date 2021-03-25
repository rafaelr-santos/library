import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MatrizesVetores = () => {

    return (
        <>
            <Link to='/subject/MatrizesVetores/Info' replace>
                <h3>
                    Matrizes e Vetores
                </h3>
            </Link>
            <Divider />

            <List>
                <Link to='/subject/MatrizesVetores/NormasVetores' replace>
                    <ListItem button key={1}>
                        <ListItemText>
                            Normas de Vetores
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to='/subject/MatrizesVetores/NormasMatrizes' replace>
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

export default MatrizesVetores;