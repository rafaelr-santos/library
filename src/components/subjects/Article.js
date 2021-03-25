import React, { lazy, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(
    {
        root: {
        }
    } 
);

const importArticle = (folder, article) =>
    lazy(() =>
        import(`./${folder}/articles/${article}.js`).catch(() =>
        //import(`./views/NullView`)
        console.log("deu pau na hora de pegar o artigo")
    )
);

const Article = ({article, folder}) => {
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
            {articlePage}
        </React.Suspense>
    );
}

export default Article