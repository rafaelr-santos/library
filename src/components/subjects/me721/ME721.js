import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ME613 = () => {

    return (
        <>
            <Link to='/subject/ME721/Info' replace>
                <h3>
                    ME721 - Demografia
                </h3>
            </Link>
            <Divider />

            <List>
                <Link to='/subject/ME721/Resumo' replace>
                    <ListItem button key={1}>
                        <ListItemText>
                            Resumo
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </>
    );
}

export default ME613;