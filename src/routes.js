import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from './components/Main';
import Hello from './containers/Hello';
import GirlList from './containers/GirlList';

import configureStore from './store';

const initialState = {};

const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={GirlList}></IndexRoute>
                <Route path="" component={Hello}></Route>
            </Route>
        </Router>    
    </Provider>
);

export default routes;
