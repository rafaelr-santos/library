import React, { lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Grid from '@material-ui/core/Grid';
import Article from './Article';

const useStyles = makeStyles(
    {
        root : {
            width : '100%',
        }
    } 
);

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const importSubject = (subject) => {
    return lazy(
        () => import(`./${subject.toLowerCase()}/${subject}.js`).catch(
            () => console.log("deu pau na hora de pegar a matéria")
        )
    );
}

const Subject = ({props}) => {
    const {subject, article} = useParams();

    let atualSubject = useState('');

    if(atualSubject !== subject){
        atualSubject = subject
    }

    const [subjectPage, setSubjectPage] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        async function loadViews() {
            const componentPromise =
            (
                async (subject) => {
                    const Component = await importSubject(subject);
                    return <Component key={1}/>;
                }
            )(subject);

            Promise.resolve(componentPromise).then(setSubjectPage);
        }

        loadViews();
    }, [atualSubject, article]);

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={3}>
                <React.Suspense fallback='Carregando conteúdo da matéria...'>
                    {subjectPage}
                </React.Suspense>
            </Grid>

            <Grid item xs={9}>
                <>
                { article ? <Article folder={subject} article={article}/> : <Article folder={subject} article={'Info'}/> }
                </>
            </Grid>
        </Grid>
    );
}

export default Subject