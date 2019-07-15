import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Items from './components/Items';
import Home from './components/Home';

const Router = () => (
    <Switch>
        <Route exact strict path='/' component={Home} /> 
        <Route exact strict path='/Items' component={Items} /> 
    </Switch>
)

export default Router