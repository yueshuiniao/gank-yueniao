import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { isNavOpen } from './little'
import * as lists from './list'

const rootReducer = combineReducers({
    routing: routerReducer,
    isNavOpen,
    ...lists
});

export default rootReducer;