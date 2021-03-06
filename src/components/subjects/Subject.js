import React, { lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(
    {
        root: {
            fontSize: 13
        }
    } 
);

const importSubject = (subject) => {
    console.log(`tentando pegar${subject}`)
    return lazy(
        () => import(`./${subject.toLowerCase()}/${subject}.js`).catch(
            () => console.log("deu pau na hora de pegar a matéria")
        )
    );
}

const Subject = () => {
    const urlParams = useParams();

    let atualSubject = useState('');

    if(atualSubject !== urlParams.subject){
        atualSubject = urlParams.subject
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
            )(urlParams.subject);

            Promise.resolve(componentPromise).then(setSubjectPage);
        }

        loadViews();
    }, [atualSubject]);

    return (
        <React.Suspense fallback='Carregando conteúdo da matéria...'>
            <Container classes={{ root : classes.root }} >
                {subjectPage}
            </Container>
        </React.Suspense>
    );
}

export default Subject