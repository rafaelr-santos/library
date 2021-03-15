import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import LibraryHome from './components/LibraryHome'
import Navbar from './components/navbar/Navbar'
import SubjectHome from './components/subjects/SubjectHome'
import Subject from './components/subjects/Subject'
import Article from './components/subjects/Article'

function App() {

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Switch>
                <Route exact path="/home">
                    <LibraryHome />
                </Route>
                <Route exact path="/subject">
                    <SubjectHome />
                </Route>
                <Route exact path="/subject/:subject">
                    <Subject />
                </Route>
                <Route exact path="/subject/:subject/:article">
                    <Subject />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;