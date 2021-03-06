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

const importArticle = (folder, article) =>
    lazy(() =>
        import(`./${folder.toLowerCase()}/articles/${article}.js`).catch(() =>
        //import(`./views/NullView`)
        console.log("deu pau na hora de pegar o artigo")
    )
);

const Article = () => {
    const {article, folder} = useParams();

    const [articlePage, setArticlePage] = useState([]);

    let atualArticle = useState('');

    if(atualArticle !== article){
        atualArticle = article
    }

    const classes = useStyles();

    useEffect(() => {
    async function loadViews() {
        const componentPromise =
        (
            async (article) => {
                const Component = await importArticle(folder, article);
                return <Component key={1}/>;
            }
        )(article);

        Promise.resolve(componentPromise).then(setArticlePage);
        }

        loadViews();
    }, [atualArticle]);

    return (
        <React.Suspense fallback='Carregando conteúdo do artigo...'>
            <Container classes={{ root : classes.root }} >
                {articlePage}
            </Container>
        </React.Suspense>
    );
}

export default Article