import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { nanoid } from 'nanoid'

const useStyles = makeStyles( (theme) => ( {
    drawerListItem: {
        background: 'white',
        margin: 5,
        borderRadius: 10,
        color: 'black'
    }
}));

const SubjectListMenuDrawer = () => {
    const classes = useStyles();
    
    const subjects = [
        {name:"ME613", description:"ME613 - Análise de Regressão"},
        {name:"ME614", description:"ME614 - Regressão Análise de "},
        {name:"ME615", description:"ME615 - de Regressão Análise"}
    ]
    

    const subjectsList = () => (
        <div>
            <List>
                { subjects.map(
                    (subject, index) => (
                        <Link to={`/subject/${subject.name}`} replace key={nanoid()}>
                            <ListItem button className={classes.drawerListItem}>
                                <ListItemText primary={subject.description} />
                            </ListItem>
                        </Link>
                    )
                )}
            </List>
        </div>
      );

    return subjectsList() ;
}

export default SubjectListMenuDrawer;
