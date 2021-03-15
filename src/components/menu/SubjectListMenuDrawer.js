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
        {name:"ME623", description:"ME623 - Planejamento e Pesquisa"},
        {name:"ME705", description:"ME705 - Inferência Bayesiana"},
        {name:"MS512", description:"MS512 - Análise I"},
        {name:"ME714", description:"ME714 - Análise de Dados Discretos"},
        {name:"ME701", description:"ME701 - Green Belt"},
        {name:"ME721", description:"ME721 - Demografia"},
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
