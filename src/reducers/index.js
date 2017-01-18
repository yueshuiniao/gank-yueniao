import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as nav from './nav'
import * as lists from './list'

const rootReducer = combineReducers({
    routing: routerReducer,
    ...nav,
    ...lists
});

export default rootReducer;