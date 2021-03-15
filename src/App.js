import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import LibraryHome from './components/LibraryHome'
import Navbar from './components/navbar/Navbar'
import SubjectHome from './components/subjects/SubjectHome'
import Subject from './components/subjects/Subject'


function App() {

    return (
        <HashRouter basename="/">
            <Navbar />
            <Box my={5} p={3} justifyContent='center'>
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
            </Box>
        </HashRouter>
    );
}

export default App;