import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import Data from './data';
import { BrowserRouter as Router, Switch, Route, hashHistory } from 'react-router-dom';
ReactDOM.render(
    <Router history={hashHistory}>
        <Switch>
            <Route path='/' exact component={App} />
            <Route path='/data/:id' component={Data} />
        </Switch>
    </Router>
    , document.getElementById('root'));
