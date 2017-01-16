import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import { changeNavState } from './actions'
// import Main from './components/Main';
import Main from './containers/Main';
import CommonList from './containers/CommonList';

import configureStore from './store';

const initialState = {};

const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRedirect to="/girls" />
                <Route path="/(:tab)" component={CommonList} onEnter={() => store.dispatch(changeNavState(false))}></Route>
            </Route>
        </Router>    
    </Provider>
);

export default routes;
